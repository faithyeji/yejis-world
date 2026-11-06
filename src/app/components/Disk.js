"use client";

import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import { useAudio } from "./AudioContext";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const transition = { type: "spring", bounce: 0, duration: 0.4 };

function CD({ entered = true }) {
  const { currentSongIndex, setCurrentSongIndex, status, setStatus, allSongs } =
    useAudio();
  const currentSong = allSongs[currentSongIndex];
  const playing = status === "playing";
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    if (allSongs.length > 0) {
      setCurrentSongIndex((prev) =>
        prev === null ? Math.floor(Math.random() * allSongs.length) : prev
      );
    }
  }, []);

  const handleNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % allSongs.length;
    setCurrentSongIndex(nextIndex);
  };

  const handlePreviousSong = () => {
    const prevIndex =
      (currentSongIndex - 1 + allSongs.length) % allSongs.length;
    setCurrentSongIndex(prevIndex);
  };

  return (
    <div className="relative h-[350px] lg:h-[425px] w-[700px]">
      <motion.div
        initial={{ rotate: 0, y: -60, opacity: 0, x: "-50%", borderRadius: 250 }}
        animate={
          !entered
            ? { rotate: 0, y: -60, opacity: 0 }
            : playing
            ? {
                // nudge down, then spin slowly while the song plays
                rotate: 360,
                y: 14,
                opacity: 1,
                transition: {
                  rotate: { ease: "linear", duration: 20, repeat: Infinity },
                  y: { type: "spring", stiffness: 260, damping: 22 },
                },
              }
            : {
                rotate: 0,
                y: 0,
                opacity: 1,
                transition: introDone
                  ? { type: "spring", stiffness: 260, damping: 22 }
                  : { duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
              }
        }
        onAnimationComplete={() => entered && setIntroDone(true)}
        whileHover={{
          scale: 1.03,
        }}
        onTap={() => {
          setStatus(status === "playing" ? "paused" : "playing");
        }}
        className="size-[350px] lg:size-[425px] absolute left-1/2 z-20 flex origin-center select-none items-center justify-center overflow-hidden border-2 border-[#d3d3d3] bg-gray-200 sm:shadow-[0_0_80px_-20px_rgba(0,0,0,0.2)]"
      >
        {/* All covers stay mounted and stacked; switching songs just crossfades
            opacity, so nothing re-mounts or re-downloads mid-transition. */}
        {allSongs.map((song, i) => (
          <div
            key={song.image}
            className="absolute inset-0 rounded-full overflow-hidden transition-opacity duration-300 ease-out"
            style={{ opacity: i === currentSongIndex ? 1 : 0 }}
            aria-hidden={i !== currentSongIndex}
          >
            <Image
              src={song.image}
              alt={song.alt}
              className="pointer-events-none select-none object-cover"
              loading="eager"
              priority={i === currentSongIndex}
              fill
              sizes="(min-width: 1024px) 425px, 350px"
            />
          </div>
        ))}

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
        {/* <audio ref={audioRef} src={currentSong.audio} loop /> */}
      </motion.div>

      {/* arrows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: entered ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute flex top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 space-x-[360px] sm:space-x-[400px] lg:space-x-[500px]">
        <button
          onClick={handlePreviousSong}
          aria-label="previous"
          className="bg-white/60 border border-neutral-200 rounded-full w-10 h-10 px-2 flex items-center justify-center transition-all  drop-shadow-sm hover:bg-white hover:scale-105 relative z-[100]"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.75 0.75V20.75H4.08336V10.7504L20.75 20.75V0.75L4.08336 10.7492V0.75H0.75Z"
              fill="#AFAFAF"
            />
          </svg>
        </button>

        <button
          onClick={handleNextSong}
          aria-label="next"
          className="bg-white/60 border border-neutral-200 rounded-full w-10 h-10 px-2 flex items-center justify-center transition-all  drop-shadow-sm hover:bg-white hover:scale-105 relative z-[100]"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.75 0.75V20.75H17.4166V10.7504L0.75 20.75V0.75L17.4166 10.7492V0.75H20.75Z"
              fill="#AFAFAF"
            />
          </svg>
        </button>
      </motion.div>
      <div />
    </div>
  );
}

export default CD;
