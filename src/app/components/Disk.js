"use client";

import { motion, MotionConfig } from "framer-motion";
import React, { createContext, useContext, useState } from "react";
import Image from "next/image";

const Context = createContext({
  status: "",
  setStatus: () => null,
});

const transition = { type: "spring", bounce: 0, duration: 0.4 };

function CD() {
  const ctx = useContext(Context);
  const playing = ctx.status === "playing";
  const audioRef = React.useRef(null);

  React.useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing]);

  return (
    <motion.div
      initial={{ rotate: 0, x: "-50%", borderRadius: 250 }}
      animate={
        playing
          ? {
              rotate: 360,
              transition: {
                ease: "linear",
                duration: 20,
                repeat: Infinity,
              },
            }
          : {
              rotate: 0,
              transition: { duration: 0.5 },
            }
      }
      whileHover={{
        scale: 1.03,
      }}
      onTap={() => {
        ctx.setStatus(ctx.status === "playing" ? "paused" : "playing");
      }}
      className="size-[500px] absolute left-1/2 z-10 flex origin-center select-none items-center justify-center overflow-hidden border-2 border-[#d3d3d3] bg-gray-400 shadow-[0_0_80px_-20px_rgba(0,0,0,0.3)]"
    >
      <Image
        src="/images/nujabes.webp"
        alt="Nujabes"
        className="pointer-events-none select-none object-cover"
        layout="fill"
        objectFit="cover"
      />
      <motion.div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="size-[480px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.1px] border-white bg-transparent opacity-35" />
        <div className="size-[150px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.75px] border-white backdrop-blur-sm" />
        <div className="size-[143px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-dotted border-gray-200/15" />
        <div className="size-[127px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.8px] border-white bg-[#c3c3c5] opacity-70" />
        <div className="size-[85px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bdbabc]" />
        <div className="size-[70px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#cfcdcf]" />
        <div className="size-[67px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9e4ea]" />
        <div className="size-[60px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1px] border-[#c8c7c5] bg-[#f5f5f5] shadow-[0_0_24px_-12px_rgba(0,0,0,0.30)_inset]" />
      </motion.div>
      <audio ref={audioRef} src="Beats Lament the World.mp3" loop />
    </motion.div>
  );
}

export default function Disk() {
  const [status, setStatus] = useState("paused");

  return (
    <Context.Provider value={{ status, setStatus }}>
      <MotionConfig transition={transition}>
        <CD />
      </MotionConfig>
    </Context.Provider>
  );
}
