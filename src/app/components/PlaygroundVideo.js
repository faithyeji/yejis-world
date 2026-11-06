"use client";
import { useEffect, useRef, useState } from "react";

// Lazy video: only loads once near the viewport, plays while visible.
export default function PlaygroundVideo({
  src,
  className = "",
  width,
  height,
  eager = false,
  onReady,
}) {
  const ref = useRef(null);
  const [near, setNear] = useState(eager);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          el.play?.().catch(() => {});
        } else {
          el.pause?.();
        }
      },
      { rootMargin: "300px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={near ? src : undefined}
      width={width}
      height={height}
      loop
      muted
      playsInline
      autoPlay={near}
      preload={near ? "auto" : "none"}
      onLoadedData={onReady}
      className={className}
    />
  );
}
