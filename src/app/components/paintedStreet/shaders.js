// Shaders for the KidSuper-style "paint it in" effect.
//
// 1. The 3D scene renders into a texture (colour + depth).
// 2. A composite pass turns that into a pencil sketch on paper (depth + colour edge detection,
//    wobbly double lines, pencil grain) and mixes in the full-colour render wherever the
//    visitor has painted.
// 3. Painting stamps soft, ragged brush dabs into a small low-res mask texture; the composite
//    distorts and thresholds it with noise so the edges read like wet paint, not circles.

const NOISE = /* glsl */ `
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) { v += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; }
    return v;
  }
`;

export const fullscreenVert = /* glsl */ `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

export const compositeFrag = /* glsl */ `
  precision highp float;
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform sampler2D tMask;
  uniform vec2 uRes;          // drawing-buffer size in px
  uniform float uNear, uFar;
  uniform float uPx;          // line thickness in px (scaled by dpr)
  uniform float uDpr;
  uniform float uUseMask;     // 0 once fully painted (skip mask lookups)
  uniform float uReveal;      // 0..1 global "paint everything" override
  uniform float uExposure;
  uniform vec3 uPaper;        // paper colour (display space)
  uniform vec3 uInk;          // pencil colour (display space)
  varying vec2 vUv;

  ${NOISE}

  float linDepth(vec2 uv) {
    float z = texture2D(tDepth, uv).x * 2.0 - 1.0;
    return (2.0 * uNear * uFar) / (uFar + uNear - z * (uFar - uNear));
  }
  float lum(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

  // Gaussian-splat-like flakes: one per cell, jittered, randomly rotated and stretched,
  // present with probability density. Returns coverage 0..1 with a crisp edge.
  float splats(vec2 p, float cell, float maxR, float density, float seed) {
    vec2 g = p / cell;
    vec2 i = floor(g);
    float cov = 0.0;
    for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
      vec2 c = i + vec2(float(x), float(y));
      if (hash(c + seed) > density) continue;
      vec2 ctr = c + 0.5 + (vec2(hash(c + seed + 1.7), hash(c + seed + 4.3)) - 0.5) * 0.9;
      float ang = hash(c + seed + 2.9) * 3.14159;
      float stretch = mix(1.0, 3.2, hash(c + seed + 6.1));
      float r = mix(0.3, 1.0, hash(c + seed + 9.1)) * maxR;
      vec2 d = (g - ctr) * cell;
      vec2 q = vec2(cos(ang) * d.x + sin(ang) * d.y, -sin(ang) * d.x + cos(ang) * d.y);
      q.x /= stretch;
      float e = length(q) / r;
      cov = max(cov, 1.0 - smoothstep(0.45, 1.0, e));
    }
    return cov;
  }

  // Straight brush strokes in a few directions (shallow, diagonal, steep), patched together
  // by soft low-frequency masks so the direction changes from area to area without swirling.
  vec2 rot(vec2 p, float a) { float c = cos(a), s = sin(a); return vec2(p.x * c + p.y * s, p.y * c - p.x * s); }
  vec3 strokeWeights(vec2 p) {
    float wB = smoothstep(0.38, 0.62, fbm(p * 1.4 + 41.0));
    float wC = smoothstep(0.45, 0.65, fbm(p * 2.1 + 77.0)) * 0.8;
    return vec3((1.0 - wB) * (1.0 - wC), wB * (1.0 - wC), wC);
  }
  const vec3 STROKE_ANG = vec3(0.12, 0.5, 0.85);   // radians: ~7, ~29, ~49 degrees

  vec3 aces(vec3 x) {
    x *= uExposure;
    return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
  }
  vec3 toDisplay(vec3 linear) { return pow(aces(linear), vec3(1.0 / 2.2)); }

  // Sobel on (relative) depth for silhouettes + on colour for creases and big shapes.
  float edgeAt(vec2 uv, float px) {
    vec2 t = px / uRes;
    vec2 tc = t;
    float dc = linDepth(uv);
    float d00 = linDepth(uv + t * vec2(-1, -1)), d10 = linDepth(uv + t * vec2(0, -1)), d20 = linDepth(uv + t * vec2(1, -1));
    float d01 = linDepth(uv + t * vec2(-1, 0)),                                         d21 = linDepth(uv + t * vec2(1, 0));
    float d02 = linDepth(uv + t * vec2(-1, 1)),  d12 = linDepth(uv + t * vec2(0, 1)),  d22 = linDepth(uv + t * vec2(1, 1));
    // Laplacian (2nd derivative) of depth: zero on flat faces even at grazing angles, high at silhouettes
    float lap = abs(8.0 * dc - (d00 + d10 + d20 + d01 + d21 + d02 + d12 + d22));
    float eD = smoothstep(0.035, 0.06, lap / max(dc, 0.001));

    float l00 = lum(toDisplay(texture2D(tColor, uv + tc * vec2(-1, -1)).rgb));
    float l10 = lum(toDisplay(texture2D(tColor, uv + tc * vec2(0, -1)).rgb));
    float l20 = lum(toDisplay(texture2D(tColor, uv + tc * vec2(1, -1)).rgb));
    float l01 = lum(toDisplay(texture2D(tColor, uv + tc * vec2(-1, 0)).rgb));
    float l21 = lum(toDisplay(texture2D(tColor, uv + tc * vec2(1, 0)).rgb));
    float l02 = lum(toDisplay(texture2D(tColor, uv + tc * vec2(-1, 1)).rgb));
    float l12 = lum(toDisplay(texture2D(tColor, uv + tc * vec2(0, 1)).rgb));
    float l22 = lum(toDisplay(texture2D(tColor, uv + tc * vec2(1, 1)).rgb));
    float cx = (l20 + 2.0 * l21 + l22) - (l00 + 2.0 * l01 + l02);
    float cy = (l02 + 2.0 * l12 + l22) - (l00 + 2.0 * l10 + l20);
    float eC = smoothstep(0.35, 0.6, length(vec2(cx, cy)));
    return max(eD, eC * 0.45);
  }

  void main() {
    vec2 uv = vUv;

    // hand-drawn wobble + a second, slightly offset pass = sketchy doubled pencil lines
    vec2 wob = (vec2(fbm(uv * 6.0 + 1.7), fbm(uv * 6.0 + 5.3)) - 0.5) * 0.0018;
    float e1 = edgeAt(uv + wob, uPx);
    float e2 = 0.0;  // single crisp line
    float ink = clamp(max(e1, e2), 0.0, 1.0) * 0.85;
    ink *= 0.85 + 0.15 * hash(floor(gl_FragCoord.xy));                  // light grain

    float rawDepth = texture2D(tDepth, uv).x;
    float solid = 1.0 - step(0.99999, rawDepth);                         // 0 where there is only sky

    // --- painted colour: watercolour on cold-press paper ---------------------
    vec2 fp = gl_FragCoord.xy / uDpr;
    // soft wash: average a few jittered taps so photo-texture detail melts into pigment
    vec2 px = 1.6 / uRes * uDpr;
    vec2 smear = (vec2(fbm(uv * vec2(60.0, 24.0)), fbm(uv * vec2(24.0, 60.0) + 3.0)) - 0.5) * 0.002;
    vec3 col = toDisplay(texture2D(tColor, uv + smear).rgb) * 0.4
             + toDisplay(texture2D(tColor, uv + smear + px * vec2( 1.3,  0.6)).rgb) * 0.15
             + toDisplay(texture2D(tColor, uv + smear + px * vec2(-1.1,  0.9)).rgb) * 0.15
             + toDisplay(texture2D(tColor, uv + smear + px * vec2( 0.7, -1.4)).rgb) * 0.15
             + toDisplay(texture2D(tColor, uv + smear + px * vec2(-0.9, -1.0)).rgb) * 0.15;
    float g = lum(col);
    col = mix(vec3(g), col, 1.28);                                        // saturated pigment
    // blotchy, uneven washes: pigment pools in some areas and thins in others
    float bloom = fbm(uv * 4.5 + 3.7) * 0.6 + fbm(uv * 13.0 + 8.1) * 0.4;
    col *= 0.9 + 0.2 * bloom;
    col = mix(col, uPaper, 0.03 + 0.05 * (1.0 - bloom));                 // paper shows through the thin parts
    // pigment settles darker along colour edges (watercolour edge-darkening)
    float pool = smoothstep(0.08, 0.3, abs(fbm(uv * 7.0 + 1.0) - 0.5));
    col *= 1.0 - 0.07 * (1.0 - pool);
    // cold-press paper: tooth catches less pigment on its peaks
    float tooth = fbm(fp * 0.55) * 0.65 + fbm(fp * 1.7 + 5.0) * 0.35;
    float grain = hash(floor(fp));
    col = mix(col, uPaper, smoothstep(0.55, 0.85, tooth) * 0.22);
    col *= 0.97 + 0.05 * grain;
    vec3 painted = mix(col, col * 0.55, ink * 0.25);                      // pencil faintly under the wash

    // --- sketch: paper + faint tone + pencil ---
    vec3 sketch = uPaper * (1.0 - 0.09 * (1.0 - g) * solid);
    sketch = mix(sketch, uInk, ink);

    // --- splat-edged reveal -------------------------------------------------------
    // Clean, connected paint with a randomly bumpy outline (like the boundary of a gaussian
    // splat capture): the mask is perturbed by smooth noise and thresholded with a short,
    // soft ramp, so the edge goes translucent -> page rather than breaking into grey specks.
    float reveal = uReveal;
    if (uUseMask > 0.5) {
      vec2 warp = (vec2(fbm(uv * 6.0), fbm(uv * 6.0 + 4.0)) - 0.5) * 0.03;
      float m = texture2D(tMask, uv + warp).r;
      if (m > 0.004) {
        float bumps = (fbm(uv * 9.0 + 1.3) - 0.5) * 0.28 + (fbm(uv * 26.0 + 7.1) - 0.5) * 0.12;
        reveal = max(reveal, smoothstep(0.3, 0.42, m + bumps));
      }
    }

    // --- painted bounds ---------------------------------------------------------
    // Colour sits in a brushed shape ~3/5 of the scene wide; beyond it the paint keeps going as
    // a long, low-opacity diffusion along the same horizontal strokes. The pencil drawing
    // covers a wider area and fades out on its own.
    float edgeBumps = (fbm(uv * 10.0 + 5.0) - 0.5) * 0.14 + (fbm(uv * 30.0 + 9.0) - 0.5) * 0.06;
    vec3 sw = strokeWeights(uv);
    float band = 0.0, bristle = 0.0;
    for (int k = 0; k < 3; k++) {
      vec2 suv = rot(uv, STROKE_ANG[k]) + vec2(0.0, (fbm(uv * vec2(1.5, 3.0) + 2.0) - 0.5) * 0.06);
      band += sw[k] * fbm(vec2(suv.x * 1.6, suv.y * 34.0) + 31.0 + float(k) * 7.0);   // one value per stroke row
      bristle += sw[k] * fbm(vec2(suv.x * 9.0, suv.y * 210.0) + 47.0 + float(k) * 5.0);
    }

    vec2 cc = (uv - vec2(0.5, 0.47)) / vec2(0.30, 0.36);
    float core = pow(pow(abs(cc.x), 3.0) + pow(abs(cc.y), 3.0), 1.0 / 3.0);
    core += (fbm(uv * vec2(2.6, 3.4) + 11.0) - 0.5) * 0.3;
    float edgeIn = (1.0 - core) + edgeBumps * 0.6 + (band - 0.45) * 0.3;    // > 0 inside colour

    float tc = clamp((edgeIn + 0.06) / 0.26, 0.0, 1.0);
    float body = tc * tc * (3.0 - 2.0 * tc);
    float dry = 1.0 - clamp((edgeIn + 0.04) / 0.24, 0.0, 1.0);
    body *= mix(1.0, smoothstep(0.3 + 0.3 * dry, 0.72, bristle + 0.25), dry * 0.8);
    // diffusion: long, faint tail outside the colour shape, streaked and uneven
    float out_ = max(-edgeIn, 0.0);
    float tail = 0.55 * exp(-out_ * mix(2.5, 6.5, fbm(uv * 3.0 + 61.0)));
    tail *= mix(0.45, 1.0, band) * mix(0.6, 1.0, bristle);
    float fillVis = max(body, tail);

    // pencil: wider, softer shape
    vec2 cl = (uv - vec2(0.5, 0.48)) / vec2(0.43, 0.41);
    float lshape = pow(pow(abs(cl.x), 3.0) + pow(abs(cl.y), 3.0), 1.0 / 3.0);
    lshape += (fbm(uv * vec2(2.6, 3.4) + 17.0) - 0.5) * 0.3;
    float li = (1.0 - lshape) + edgeBumps + (band - 0.45) * 0.2;
    float tl = clamp((li + 0.1) / 0.2, 0.0, 1.0);
    float lineVis = tl * tl * (3.0 - 2.0 * tl);
    reveal *= fillVis;

    vec3 paint = painted;

    // pencil over the paint (premultiplied): partial paint is see-through, never grey
    float aFill = solid * reveal;
    float aLine = ink * (1.0 - 0.55 * reveal) * lineVis;
    // washed, streaky application: horizontal drag marks thin the pigment unevenly
    float drag = 0.0;
    for (int k = 0; k < 3; k++) {
      vec2 duv = rot(uv, STROKE_ANG[k]);
      drag += sw[k] * (fbm(vec2(duv.x * 2.2, duv.y * 140.0) + 5.0 + float(k) * 3.0) * 0.6
                     + fbm(vec2(duv.x * 6.0, duv.y * 320.0) + 19.0 + float(k) * 3.0) * 0.4);
    }
    aFill *= 0.9 + 0.1 * smoothstep(0.25, 0.75, drag);
    paint = mix(paint, uPaper, (1.0 - smoothstep(0.3, 0.7, drag)) * 0.05);
    vec3 premul = uInk * aLine + paint * aFill * (1.0 - aLine);
    float alpha = aLine + aFill * (1.0 - aLine);
    gl_FragColor = vec4(premul, alpha);
  }
`;

export const brushVert = /* glsl */ `
  uniform vec2 uCenter;     // uv
  uniform float uRadius;    // in uv-height units
  uniform float uAspect;    // width / height of the canvas
  varying vec2 vLocal;
  void main() {
    vLocal = position.xy;
    vec2 p = uCenter + position.xy * vec2(uRadius / uAspect, uRadius);
    gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
  }
`;

export const brushFrag = /* glsl */ `
  precision highp float;
  uniform float uSeed;
  uniform float uAmount;
  varying vec2 vLocal;
  ${NOISE}
  void main() {
    float d = length(vLocal);
    float core = exp(-d * d * 3.0);                               // gaussian spray cone
    float n = 0.75 + 0.5 * vnoise(vLocal * 6.0 + uSeed);          // uneven nozzle
    float a = core * n * uAmount * (1.0 - smoothstep(0.85, 1.0, d));
    gl_FragColor = vec4(vec3(a), 1.0);
  }
`;
