"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useAudio } from "./components/AudioContext";
import { useState, useEffect, useRef } from "react";
import Project from "./components/Project";

export default function Home() {
  const [nameImageIndex, setNameImageIndex] = useState(0);
  const nameImages = [
    "/images/names/yeji1.webp",
    "/images/names/yeji2.webp",
    "/images/names/yeji3.webp",
    "/images/names/yeji4.webp",
    "/images/names/yeji5.webp",
    "/images/names/yeji6.webp",
  ];

  const { allSongs, currentSongIndex, status, setStatus, setCurrentSongIndex } =
    useAudio();
  const currentSong = allSongs[currentSongIndex];
  const currentSongTitle = currentSong?.name || "Nothing";
  const playing = status === "playing";

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing, currentSongIndex]);

  const handleNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % allSongs.length;
    setCurrentSongIndex(nextIndex);
  };

  const handlePreviousSong = () => {
    const prevIndex =
      (currentSongIndex - 1 + allSongs.length) % allSongs.length;
    setCurrentSongIndex(prevIndex);
  };

  const handleNextImage = () => {
    setNameImageIndex((prev) => (prev + 1) % nameImages.length);
  };

  const handlePreviousImage = () => {
    setNameImageIndex(
      (prev) => (prev - 1 + nameImages.length) % nameImages.length
    );
  };

  return (
    <main className="h-full w-full">
      <div className="flex w-full justify-center items-center mt-[140px] gap-2 ml-20 animate-slidein opacity-0 [--slidein-delay:700ms]">
        {/* Vinyl */}
        <div className="w-[390px] h-[375px] px-10 py-14 border-1.5 z-20 bg-[url('/images/paperbacking.webp')] bg-cover rounded-xl drop-shadow-md -rotate-2">
          <div className="flex w-full justify-between">
            {/* Arrows */}
            <button
              onClick={() => {
                handlePreviousSong();
                handlePreviousImage();
              }}
              aria-label="previous"
              className="bg-white/70 border border-neutral-200 rounded-full w-10 h-10 mt-2 px-2 flex items-center justify-center transition-all  drop-shadow-sm hover:bg-white hover:scale-105"
            >
              <svg
                width="16"
                height="16"
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
            <div className="relative w-[150px] h-[60px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={nameImageIndex}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={nameImages[nameImageIndex]}
                    alt="Yeji Names"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>{" "}
            <button
              onClick={() => {
                handleNextSong();
                handleNextImage();
              }}
              aria-label="next"
              className="bg-white/70 border border-neutral-200 rounded-full w-10 h-10 px-2 mt-2 flex items-center justify-center transition-all  drop-shadow-sm hover:bg-white hover:scale-105"
            >
              <svg
                width="16"
                height="16"
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
          </div>
          <p className="w-full px-2 font-mono text-sm leading-tight mt-6 text-gray-700">
            IS A MULTIDISCIPLINARY DESIGNER x CREATIVE TECHNOLOGIST DEDICATED TO
            CRAFTING EXPERIENCES THAT EVOKE DELIGHT & PLAY. <br /> <br />
            SHE (DESPITE AN INTEREST IN EVERYTHING CREATIVE) SPECIALIZES IN
            DIGITAL ART DIRECTION, BRAND, WEB/PRODUCT, & INTERACTIVE
            STORYTELLING.
          </p>
        </div>

        {/* CD */}
        <div className="relative -rotate-2 pb-6">
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
              scale: 1.02,
            }}
            onTap={() => {
              setStatus(status === "playing" ? "paused" : "playing");
            }}
            className="size-[350px] z-10 flex origin-center select-none items-center justify-center overflow-hidden border-2 border-[#d3d3d3] bg-gray-200 shadow-[0_0_80px_-20px_rgba(0,0,0,0.3)]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSongIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 rounded-full overflow-hidden"
              >
                <Image
                  src={currentSong.image}
                  alt={currentSong.alt}
                  className="pointer-events-none select-none object-cover"
                  style={{ objectFit: "cover" }}
                  loading="eager"
                  priority
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            </AnimatePresence>

            {/* CD Layers */}
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
            <audio ref={audioRef} src={currentSong.audio} loop />
          </motion.div>
        </div>
      </div>

      {/* Projects */}
      <div className="bg-gray-200 mx-20 rounded-lg mt-36 py-20">
        <div className="flex flex-wrap mt-8 mb-16 sm:mt-12 md:mx-32 justify-center items-center text-center gap-8 w-fit text-neutral-600">
          <Project
            title="The StoryGraph"
            type="UI/UX DESIGN"
            imageSrc="/images/projects/storygraph.webp"
            link="https://accurate-camera-fa3.notion.site/The-StoryGraph-163d2970043580a2b3dccf6ca916812c?pvs=74"
            description="Working as the sole UX designer for a book-sharing platform with 3 million users."
          />
          <Project
            title="Lumen"
            type="UX/BRANDING"
            imageSrc="/images/projects/lumen.webp"
            link="https://accurate-camera-fa3.notion.site/Lumen-164d2970043580df97e8eb670fe641cd"
            description="Collecting, organizing, and illuminating user feedback to highlight key insights."
          />
          <Project
            title="Namu"
            type="DESIGN, FULL-STACK DEV"
            imageSrc="/images/projects/namu.webp"
            link="https://accurate-camera-fa3.notion.site/Namu-164d2970043580bea568dd6e3bcaef87?pvs=73"
            description="A digital garden where work-in-progresses and unfinished projects can grow."
          />
          <Project
            title="Encore"
            type="UI/UX DESIGN (TEAM)"
            imageSrc="/images/projects/encore2.webp"
            link="https://www.figma.com/proto/1GGlcr1JEq7slx0zS53tKa/Yeji-Seo-Case-Studies?node-id=13-23&t=AtnKcVpdvkXMjAT1-1"
            description="Designing a space for aspiring musicians to find community and support."
          />
          <Project
            title="Fathead WP"
            type="GRAPHIC DESIGN"
            imageSrc="/images/projects/fatheadkid.webp"
            link="https://drive.google.com/file/d/1WfWgL6jatDaOm4jOPPUI4FIm1luHpora/view?usp=sharing"
            description="186 pages of pure graphic design for the NAACP award-winning film's White Paper."
          />
          <Project
            title="Synth"
            type="CREATIVE CODING"
            imageSrc="/images/projects/synth.webp"
            link="https://drive.google.com/file/d/1DVNiTyK964iSHWizV1mqaYqbdLrnYjqL/view?usp=sharing"
            description="A TouchDesigner project that plays with hand & midi inputs to visualize music in real-time."
          />
        </div>
      </div>
    </main>
  );
}
