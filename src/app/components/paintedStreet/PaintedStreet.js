"use client";
import dynamic from "next/dynamic";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useLoading } from "../LoadingContext";

// three.js only loads once the section is close to the viewport
const StreetCanvas = dynamic(() => import("./StreetCanvas"), { ssr: false });

export default function PaintedStreet() {
  const wrapRef = useRef(null);
  const cursorRef = useRef(null);
  const pointer = useRef({ x: 0.5, y: 0.5, inside: false, painting: false, coarse: false, tap: false, queue: [] });
  const controls = useRef({});
  const lastInput = useRef(0);

  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isTouch, setIsTouch] = useState(false);
  const { isLoaded } = useLoading(); // don't compete with the page's intro reveal

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    const el = wrapRef.current;
    if (!el) return;
    const near = new IntersectionObserver(([e]) => e.isIntersecting && setMounted(true), { rootMargin: "800px 0px" });
    const visible = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { threshold: 0 });
    near.observe(el); visible.observe(el);
    return () => { near.disconnect(); visible.disconnect(); };
  }, []);

  const onProgress = useCallback((f) => {
    const stepped = f >= 1 ? 1 : Math.floor(f * 20) / 20;
    setProgress((p) => (p === stepped ? p : stepped));
  }, []);
  const onReady = useCallback(() => setReady(true), []);

  // pointer -> uv (GL convention: y up)
  const toUv = (e) => {
    const r = wrapRef.current.getBoundingClientRect();
    return { x: (e.clientX - r.left) / r.width, y: 1 - (e.clientY - r.top) / r.height, px: e.clientX - r.left, py: e.clientY - r.top };
  };
  const moveCursor = (px, py, show) => {
    const c = cursorRef.current;
    if (!c) return;
    const d = Math.round(0.1 * 2 * 0.6 * wrapRef.current.clientHeight); // matches the brush radius
    c.style.width = c.style.height = `${d}px`;
    c.style.transform = `translate(${px}px, ${py}px) translate(-50%, -50%)`;
    c.style.opacity = show ? "1" : "0";
  };
  const onMove = (e) => {
    const { x, y, px, py } = toUv(e);
    const p = pointer.current;
    p.x = x; p.y = y; p.inside = true;
    p.coarse = e.pointerType !== "mouse";
    p.painting = e.pointerType === "mouse" || e.buttons > 0;
    if (p.painting && p.queue.length < 400) p.queue.push({ x, y }); // every sample, so fast strokes stay continuous
    lastInput.current = performance.now();
    if (e.pointerType === "mouse") moveCursor(px, py, progress < 1);
  };
  const onDown = (e) => {
    onMove(e);
    pointer.current.painting = true;
    pointer.current.down = true;
    pointer.current.tap = true;
  };
  const onUp = (e) => { pointer.current.down = false; if (e.pointerType !== "mouse") pointer.current.painting = false; };
  const onLeave = () => { const p = pointer.current; p.inside = false; p.painting = false; p.down = false; p.queue.push(null); moveCursor(0, 0, false); };

  // On touch screens nobody "hovers", so after a few idle seconds a ghost brush paints for you.
  useEffect(() => {
    if (!isTouch || !active || !ready || progress >= 1) return;
    let raf, t0 = performance.now();
    const tick = (now) => {
      if (now - lastInput.current > 3000) {
        const t = (now - t0) / 1000;
        const p = pointer.current;
        p.inside = true; p.painting = true; p.coarse = true;
        p.x = 0.5 + 0.42 * Math.sin(t * 0.55);
        p.y = 0.5 + 0.36 * Math.sin(t * 1.27 + 0.6);
        p.queue.push({ x: p.x, y: p.y });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); pointer.current.painting = false; };
  }, [isTouch, active, ready, progress]);

  return (
    <section className="w-full">
      {/* full-screen canvas */}
      <div
        ref={wrapRef}
        onPointerMove={onMove}
        onPointerDown={onDown}
        onPointerUp={onUp}
        onPointerCancel={onLeave}
        onPointerLeave={onLeave}
        className={`relative w-full h-[80svh] sm:h-[85svh] select-none touch-pan-y overflow-hidden ${
          progress < 1 ? "md:cursor-none" : ""
        }`}
      >
        {mounted && isLoaded && (
          <Suspense fallback={null}>
            <StreetCanvas active={active} pointer={pointer} controls={controls} onProgress={onProgress} onReady={onReady} />
          </Suspense>
        )}
        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center font-mono text-[0.65rem] text-neutral-400">
            Sketching&hellip;
          </div>
        )}
        {/* brush cursor */}
        <div
          ref={cursorRef}
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 hidden md:block rounded-full border border-dashed border-neutral-800/40 opacity-0 transition-opacity duration-200"
          style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)" }}
        />
      </div>
    </section>
  );
}
