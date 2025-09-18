"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import Image from "next/image";

export default function DraggableSticker({
  src,
  alt,
  width,
  height,
  startX = 0,
  startY = 0,
  rotation = 0,
}) {
  const stickerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(Draggable);
    if (stickerRef.current) {
      Draggable.create(stickerRef.current, {
        type: "x,y",
        inertia: true,
        bounds: document.body,
        zIndexBoost: true,
      });
    }
  }, []);

  return (
    <div
      ref={stickerRef}
      className="z-10 cursor-grab active:cursor-grabbing absolute hidden lg:block"
      style={{
        left: startX,
        top: startY,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        draggable={false}
        className="cursor-grab active:cursor-grabbing"
      />
    </div>
  );
}
