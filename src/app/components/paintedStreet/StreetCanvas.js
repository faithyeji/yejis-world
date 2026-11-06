"use client";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { useEffect, useMemo, useRef } from "react";
import { brushFrag, brushVert, compositeFrag, fullscreenVert } from "./shaders";

const MODEL = "/models/storefront.glb";
const PAPER = new THREE.Color("#f8f7f4");
const INK = new THREE.Color("#2a2730");
const GRID_W = 48, GRID_H = 27;        // coarse coverage grid used to auto-finish the painting
const FINISH_AT = 0.72;                // fraction painted before the rest fills in by itself

/* ------------------------------------------------------------------ */
/* Scene                                                               */
/* ------------------------------------------------------------------ */

function Storefront({ onReady }) {
  const { scene, animations } = useGLTF(MODEL);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    scene.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        if (o.material?.map) o.material.map.anisotropy = 8;
      }
    });
    const tpl = scene.getObjectByName("Leaf_Template");
    if (tpl) tpl.visible = false;
    onReady?.();
  }, [scene, onReady]);

  useEffect(() => {
    const a = actions?.Pigeon_WalkPeck;
    a?.reset().play();
    return () => a?.stop();
  }, [actions]);

  return (
    <>
      <primitive object={scene} />
      <FallingLeaves source={scene} />
    </>
  );
}

const LEAF_COLORS = ["#d95c12", "#9e1f0d", "#dba021", "#6b3814", "#c07a1a"].map((c) => new THREE.Color(c));

function FallingLeaves({ source, count = 70 }) {
  const tpl = source.getObjectByName("Leaf_Template");
  const ref = useRef();
  const leaves = useMemo(() => {
    const r = (a, b) => a + Math.random() * (b - a);
    const spawn = (l, air) => {
      l.pos = new THREE.Vector3(r(-6.5, 6.5), air ? r(0.3, 8) : r(5.5, 8), r(0.15, 3.1));
      l.fall = r(0.35, 0.7); l.amp = r(0.15, 0.45); l.freq = r(0.6, 1.4); l.phase = r(0, 6.28);
      l.spin = new THREE.Vector3(r(-3, 3), r(-2, 2), r(-3, 3));
      l.rot = new THREE.Euler(r(0, 6.28), r(0, 6.28), r(0, 6.28));
      l.scale = r(0.8, 1.25); l.state = "fall"; l.t = 0;
    };
    const arr = Array.from({ length: count }, () => { const l = {}; spawn(l, true); return l; });
    arr.spawn = spawn; arr.r = r;
    return arr;
  }, [count]);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const material = useMemo(() => {
    if (!tpl) return null;
    const m = tpl.material.clone();
    m.depthWrite = false;
    return m;
  }, [tpl]);

  useEffect(() => {
    if (!ref.current) return;
    for (let i = 0; i < count; i++) ref.current.setColorAt(i, LEAF_COLORS[i % LEAF_COLORS.length]);
    ref.current.instanceColor.needsUpdate = true;
  }, [count]);

  useFrame((_, dtRaw) => {
    const mesh = ref.current;
    if (!mesh) return;
    const dt = Math.min(dtRaw, 0.05);
    for (let i = 0; i < count; i++) {
      const l = leaves[i];
      l.t += dt;
      let s = l.scale;
      if (l.state === "fall") {
        const sw = Math.sin(l.t * l.freq * Math.PI * 2 + l.phase);
        l.pos.y -= l.fall * dt * (0.75 + 0.25 * Math.abs(sw));
        l.pos.x += sw * l.amp * dt;
        l.pos.z += Math.cos(l.t * l.freq * 1.3 + l.phase) * l.amp * 0.5 * dt;
        l.rot.x += l.spin.x * dt; l.rot.y += l.spin.y * dt; l.rot.z += l.spin.z * dt;
        if (l.pos.y <= 0.004) {
          l.pos.y = 0.004;
          l.rot.set(leaves.r(-0.15, 0.15), leaves.r(0, 6.28), leaves.r(-0.15, 0.15), "YXZ");
          l.state = "rest"; l.t = 0; l.rest = leaves.r(2.5, 7);
        }
      } else if (l.state === "rest") {
        if (l.t > l.rest) { l.state = "shrink"; l.t = 0; }
      } else {
        s *= Math.max(0, 1 - l.t / 0.6);
        if (l.t > 0.6) leaves.spawn(l, false);
      }
      dummy.position.copy(l.pos); dummy.rotation.copy(l.rot); dummy.scale.setScalar(s);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  if (!tpl) return null;
  return (
    <instancedMesh ref={ref} args={[tpl.geometry, material, count]} frustumCulled={false} renderOrder={10} castShadow />
  );
}

/* Camera framing: keep ~12m of street in view at any aspect, with a little pointer parallax. */
function CameraRig({ pointer }) {
  // Street-level view, standing on the sidewalk a little left of the shutter and looking
  // slightly down and across at it (matches the framing picked in Blender).
  const { camera, size } = useThree();
  const target = useMemo(() => new THREE.Vector3(-0.45, 1.3, 1.6), []);
  const base = useMemo(() => new THREE.Vector3(-1.6, 2.9, 11.2), []);
  const dir = useMemo(() => base.clone().sub(target).normalize(), [base, target]);
  useFrame((_, dt) => {
    const aspect = size.width / size.height;
    // keep the shutter plus some wall either side in frame on narrow screens
    const vfov = THREE.MathUtils.degToRad(camera.fov);
    const needW = 5.2;
    const t = Math.tan(vfov / 2);
    // narrow screens: back off so the shutter fits; very wide screens: move in so the
    // ends of the neighbouring buildings never come into view
    const wallOffset = target.z;                 // target sits in front of the facade
    const maxW = 15.5;                           // the block is ~14m wide; the side fade hides the very ends
    const fitMax = maxW / (2 * t * aspect) - wallOffset;
    const fitMin = needW / (t * aspect);
    const dist = Math.min(Math.max(base.distanceTo(target), fitMin), Math.max(fitMax, 4));
    const p = pointer.current;
    const tx = (p.inside ? p.x - 0.5 : 0) * 0.5;
    const ty = (p.inside ? p.y - 0.5 : 0) * 0.25;
    const want = target.clone().addScaledVector(dir, dist);
    camera.position.x = THREE.MathUtils.damp(camera.position.x, want.x + tx, 3, dt);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, want.y + ty, 3, dt);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, want.z, 3, dt);
    camera.lookAt(target);
  });
  return null;
}

function Lights() {
  const { gl, scene } = useThree();
  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = env;
    scene.environmentIntensity = 0.45;
    return () => { env.dispose(); pmrem.dispose(); scene.environment = null; };
  }, [gl, scene]);
  return (
    <>
      <hemisphereLight args={["#e6edf7", "#b8a58a", 1.1]} />
      <directionalLight
        position={[-7, 11, 9]}
        intensity={2.6}
        color="#fff1dc"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0004}
        shadow-normalBias={0.02}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-6}
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Paint compositor: scene -> texture, brush -> mask, composite -> screen */
/* ------------------------------------------------------------------ */

function PaintCompositor({ pointer, controls, onProgress }) {
  const { gl, scene, camera, size } = useThree();
  const dpr = gl.getPixelRatio();

  const sceneRT = useMemo(() => {
    const rt = new THREE.WebGLRenderTarget(1, 1, {
      type: THREE.HalfFloatType,
      samples: 4,
      depthTexture: new THREE.DepthTexture(1, 1),
    });
    return rt;
  }, []);
  const maskRT = useMemo(
    () => new THREE.WebGLRenderTarget(1, 1, { type: THREE.UnsignedByteType, depthBuffer: false }),
    []
  );

  const quad = useMemo(() => {
    const mat = new THREE.ShaderMaterial({
      vertexShader: fullscreenVert,
      fragmentShader: compositeFrag,
      transparent: true,
      premultipliedAlpha: true, // shader outputs premultiplied colour; without this edges darken to grey
      depthTest: false,
      depthWrite: false,
      uniforms: {
        tColor: { value: sceneRT.texture },
        tDepth: { value: sceneRT.depthTexture },
        tMask: { value: maskRT.texture },
        uRes: { value: new THREE.Vector2(1, 1) },
        uNear: { value: 0.1 },
        uFar: { value: 100 },
        uPx: { value: 1 },
        uDpr: { value: 1 },
        uUseMask: { value: 1 },
        uReveal: { value: 0 },
        uExposure: { value: 1.0 },
        uPaper: { value: new THREE.Vector3(PAPER.r, PAPER.g, PAPER.b) },
        uInk: { value: new THREE.Vector3(INK.r, INK.g, INK.b) },
      },
    });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    m.frustumCulled = false;
    const s = new THREE.Scene(); s.add(m);
    return { scene: s, mat };
  }, [sceneRT, maskRT]);

  const brush = useMemo(() => {
    const mat = new THREE.ShaderMaterial({
      vertexShader: brushVert,
      fragmentShader: brushFrag,
      depthTest: false,
      depthWrite: false,
      blending: THREE.CustomBlending,
      blendEquation: THREE.AddEquation,          // coats build up like real spray
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneFactor,
      uniforms: {
        uCenter: { value: new THREE.Vector2() },
        uRadius: { value: 0.08 },
        uAspect: { value: 1 },
        uSeed: { value: 0 },
        uAmount: { value: 0.3 },
      },
    });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    m.frustumCulled = false;
    const s = new THREE.Scene(); s.add(m);
    return { scene: s, mat };
  }, []);
  const orthoCam = useMemo(() => new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), []);

  const state = useRef({ last: null, grid: new Uint8Array(GRID_W * GRID_H), painted: 0, finishing: false, done: false, needsClear: true });

  // sizes
  useEffect(() => {
    const w = Math.max(1, Math.floor(size.width * dpr)), h = Math.max(1, Math.floor(size.height * dpr));
    sceneRT.setSize(w, h);
    sceneRT.depthTexture.image.width = w; sceneRT.depthTexture.image.height = h;
    const mw = 384, mh = Math.max(1, Math.round(384 / (size.width / size.height)));
    maskRT.setSize(mw, mh);
    state.current.needsClear = true;
    quad.mat.uniforms.uRes.value.set(w, h);
    quad.mat.uniforms.uPx.value = Math.max(0.6, dpr * 0.5);
    quad.mat.uniforms.uDpr.value = dpr;
    brush.mat.uniforms.uAspect.value = size.width / size.height;
  }, [size.width, size.height, dpr, sceneRT, maskRT, quad, brush]); // not `size`: its top/left change on scroll

  useEffect(() => { const prev = gl.autoClear; gl.autoClear = false; return () => { gl.autoClear = prev; }; }, [gl]);
  useEffect(() => () => { sceneRT.dispose(); maskRT.dispose(); }, [sceneRT, maskRT]);

  // reset / paint-all controls from the DOM
  useEffect(() => {
    controls.current.reset = () => {
      const s = state.current;
      pointer.current.queue.length = 0;
      s.grid.fill(0); s.painted = 0; s.finishing = false; s.done = false; s.needsClear = true; s.last = null;
      quad.mat.uniforms.uReveal.value = 0; quad.mat.uniforms.uUseMask.value = 1;
      onProgress?.(0);
    };
    controls.current.paintAll = () => { state.current.finishing = true; };
  }, [controls, quad, onProgress, pointer]);

  const stamp = (u, v, radius, amount = 0.3) => {
    const b = brush.mat.uniforms;
    b.uAmount.value = amount;
    b.uCenter.value.set(u, v); b.uRadius.value = radius; b.uSeed.value = Math.random() * 100;
    gl.render(brush.scene, orthoCam);
    // coverage bookkeeping
    const s = state.current, aspect = size.width / size.height;
    const rx = Math.ceil((radius / aspect) * GRID_W * 0.45), ry = Math.ceil(radius * GRID_H * 0.45); // dense core only
    const cx = Math.floor(u * GRID_W), cy = Math.floor(v * GRID_H);
    for (let y = cy - ry; y <= cy + ry; y++) for (let x = cx - rx; x <= cx + rx; x++) {
      if (x < 0 || y < 0 || x >= GRID_W || y >= GRID_H) continue;
      const dx = (x - cx) / Math.max(rx, 1), dy = (y - cy) / Math.max(ry, 1);
      if (dx * dx + dy * dy > 1) continue;
      const i = y * GRID_W + x;
      if (!s.grid[i]) { s.grid[i] = 1; s.painted++; }
    }
  };

  useFrame((_, dt) => {
    const s = state.current, u = quad.mat.uniforms;
    u.uNear.value = camera.near; u.uFar.value = camera.far;

    // 1) brush strokes into the mask (interpolated so fast strokes stay continuous)
    if (!s.done) {
      gl.setRenderTarget(maskRT);
      if (s.needsClear) { gl.setClearColor(0x000000, 1); gl.clear(true, false, false); s.needsClear = false; }
      const p = pointer.current;
      const radius = p.coarse ? 0.14 : 0.1;
      let budget = 160;                                   // max stamps per frame
      while (p.queue.length && budget > 0) {
        const q = p.queue.shift();
        if (!q) { s.last = null; continue; }              // stroke break (pointer left)
        const cur = new THREE.Vector2(q.x, q.y);
        const last = s.last ?? cur;
        const steps = Math.min(32, Math.max(1, Math.ceil(cur.distanceTo(last) / (radius * 0.35))));
        for (let k = 1; k <= steps; k++) stamp(last.x + (cur.x - last.x) * (k / steps), last.y + (cur.y - last.y) * (k / steps), radius);
        budget -= steps;
        s.last = cur;
      }
      if (p.tap) { stamp(p.x, p.y, radius, 0.5); p.tap = false; }
      // holding still with the button/finger down keeps spraying, building up the coat
      if (p.inside && p.down && !p.queue.length) stamp(p.x, p.y, radius, Math.min(0.6, dt * 2.0));
      if (!p.painting && !p.queue.length) s.last = null;
      gl.setRenderTarget(null);

      const frac = s.painted / (GRID_W * GRID_H);
      onProgress?.(frac);
      if (frac > FINISH_AT) s.finishing = true;
      if (s.finishing) {
        u.uReveal.value = Math.min(1, u.uReveal.value + dt / 1.6);
        if (u.uReveal.value >= 1) { s.done = true; u.uUseMask.value = 0; onProgress?.(1); }
      }
    }

    // 2) scene -> texture
    gl.setRenderTarget(sceneRT);
    gl.setClearColor(0x000000, 0);
    gl.clear(true, true, true);
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    // 3) composite -> screen
    gl.setClearColor(0x000000, 0);
    gl.clear(true, true, true);
    gl.render(quad.scene, orthoCam);
  }, 1);

  return null;
}

/* ------------------------------------------------------------------ */

export default function StreetCanvas({ active, pointer, controls, onProgress, onReady }) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={[1, 1.75]}
      shadows
      camera={{ fov: 36, near: 0.3, far: 60, position: [-1.6, 2.9, 11.2] }}
      gl={{ antialias: false, alpha: true, premultipliedAlpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Lights />
      <Storefront onReady={onReady} />
      <CameraRig pointer={pointer} />
      <PaintCompositor pointer={pointer} controls={controls} onProgress={onProgress} />
    </Canvas>
  );
}
