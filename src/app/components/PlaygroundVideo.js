"use client";
import { useEffect, useState } from "react";

export default function PlaygroundVideo({ src, className = "" }) {
  const [canAutoPlay, setCanAutoPlay] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    setCanAutoPlay(isDesktop);
  }, []);

  useEffect(() => {
    if (canAutoPlay) {
      document.querySelectorAll("video[data-autoplay]").forEach((vid) => {
        vid.play().catch(() => {});
      });
    }
  }, [canAutoPlay]);

  return (
    <video
      key={canAutoPlay ? `${src}-auto` : `${src}-noauto`}
      src={src}
      loop
      muted
      playsInline
      preload="auto"
      autoPlay={canAutoPlay}
      data-autoplay
      className={className}
    />
  );
}
