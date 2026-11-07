"use client";
import Image from "next/image";
import Folder from "./components/Folder";
import CD from "./components/Disk";
import { useAudio } from "./components/AudioContext";
import { Draggable } from "gsap/Draggable";
import ProjectsGallery from "./components/ProjectsGallery";
import { useEffect, useRef } from "react";
import { preload } from "react-dom";
import DraggableSticker from "./components/DraggableSticker";
import AudioPlayer from "./components/AudioPlayer";
import { useLoading } from "./components/LoadingContext";

// seconds of static hold to skip at the start of the name video
const NAME_VIDEO_START = 1.1;
const NAME_POSTER = "/YejiNames2-poster.webp";

export default function Home() {
  const photos = [
    {
      text: "Neighhh.",
      image: "/images/folder/horsey.webp",
    },
    {
      text: "Mount Ye (ji)",
      image: "/images/folder/mountYe.webp",
    },
    {
      text: "LA shenanigans!",
      image: "/images/folder/coolStore.webp",
    },
    {
      text: "Djing..",
      image: "/images/folder/djing.webp",
    },
  ];

  const { allSongs, currentSongIndex, status } = useAudio();
  const currentSongTitle = allSongs[currentSongIndex]?.name || "Nothing";
  const videoRef = useRef(null);
  const introDone = useRef(false);
  // first frame of the name video: shows instantly while the video itself downloads
  preload(NAME_POSTER, { as: "image", fetchPriority: "high" });
  const { isLoaded } = useLoading();

  // hash navigation
  useEffect(() => {
    const handleHashNavigation = () => {
      if (window.location.hash === "#projects") {
        const projectsElement = document.getElementById("projects");
        if (projectsElement) {
          setTimeout(() => {
            projectsElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    };

    handleHashNavigation();
    window.addEventListener("hashchange", handleHashNavigation);
    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, []);

  // Play video on mount. iOS only autoplays when the `muted`/`playsinline`
  // *attributes* are present (React sets muted as a property only), and Low
  // Power Mode blocks autoplay entirely — so also start it on the first touch.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
    const tryPlay = () => introDone.current && v.paused && v.play().catch(() => {});
    const onFirstTouch = () => {
      tryPlay();
      window.removeEventListener("touchstart", onFirstTouch);
      window.removeEventListener("pointerdown", onFirstTouch);
    };
    window.addEventListener("touchstart", onFirstTouch, { passive: true });
    window.addEventListener("pointerdown", onFirstTouch);
    return () => {
      window.removeEventListener("touchstart", onFirstTouch);
      window.removeEventListener("pointerdown", onFirstTouch);
    };
  }, []);

  // Hold the name on its first frame until its slide-in has fully finished, then start the
  // video (slide-in: 100ms delay + 1s animation once the page reveal begins).
  useEffect(() => {
    if (!isLoaded) return;
    const t = setTimeout(() => {
      introDone.current = true;
      const v = videoRef.current;
      if (v && v.paused) v.play().catch(() => {});
    }, 1150);
    return () => clearTimeout(t);
  }, [isLoaded]);

  // keep the name video looping regardless of music state
  useEffect(() => {
    const v = videoRef.current;
    if (introDone.current && v && v.paused) v.play().catch(() => {});
  }, [status]);

  return (
    <main className="overflow-hidden h-full w-full">
      <div className="animate-fadein delay-200">
        <Folder
          title="photos"
          style="top-[310px] left-[25%]"
          content={photos}
          position="top-[110%] left-[8%] origin-[0%-30%]"
        />
        {/* <Image
          src="/images/codedwithlove.webp"
          width={100}
          height={100}
          alt="folder"
          className="w-27 h-auto absolute hidden lg:block top-[30%] right-[24%]"
          loading="eager"
        /> */}
        <DraggableSticker
          src="/images/codedwithlove.webp"
          alt="coded"
          width={90}
          height={90}
          startX="66%"
          startY="235px"
          rotation={0}
        />
        <DraggableSticker
          src="/images/yeggi.webp"
          alt="folder"
          width={60}
          height={60}
          startX="30%"
          startY="205px"
          rotation={0}
        />
      </div>
      <div className="flex flex-col mt-0 md:mt-10 justify-center items-center text-center gap-2 text-neutral-600 relative">
        {/* <h1 className="font-serif italic text-5xl text-blue-700">Yeji Seo</h1> */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          poster={NAME_POSTER}
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          // skip the ~1.4s still hold at the start of the file, on first play and every loop
          onLoadedMetadata={(e) => {
            if (e.currentTarget.currentTime < NAME_VIDEO_START)
              e.currentTarget.currentTime = NAME_VIDEO_START;
          }}
          onEnded={(e) => {
            e.currentTarget.currentTime = NAME_VIDEO_START;
            e.currentTarget.play().catch(() => {});
          }}
          className="name-video absolute top-0 w-[260px] md:w-[300px] h-auto mix-blend-multiply pointer-events-none animate-slidein opacity-0 [--slidein-delay:100ms]"
        >
          <source src="/YejiNames2-hevc-safari.mp4" />{" "}
          <source src="/YejiNames2-vp9-chrome.webm" />{" "}
        </video>
        <p className="w-72 sm:w-80 md:w-[400px] font-serif text-lg md:text-[1.35rem] leading-[1.3] mt-[138px] md:mt-[160px] animate-slidein opacity-0 [--slidein-delay:300ms]">
          is a multidisciplinary brand designer based in NYC. She
          specializes in art direction &amp; interactive, human-centered
          storytelling.
        </p>
        <div className="text-[10px] mt-2 z-20 text-center font-mono text-gray-400 animate-slidein opacity-0 [--slidein-delay:700ms]">
          {status === "playing" ? "Now playing:" : "Click to play:"}{" "}
          {currentSongTitle}
        </div>

        {/* Disc: spins down and in below the header text once the page has loaded */}
        <div
          className="mt-6 md:mt-8 z-10 h-[140px] sm:h-[158px] lg:h-[213px]"
          // clip only the bottom: the first project's line cuts the disc in half
          style={{ clipPath: "inset(-200vh -100vw 0 -100vw)" }}
        >
          <div className="flex justify-center origin-top scale-[0.8] sm:scale-90 lg:scale-100">
            <CD entered={isLoaded} />
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="mb-16 md:mb-20 w-full opacity-0 animate-slidein [--slidein-delay:500ms]"
      >
        <ProjectsGallery />
      </div>
      <footer className="pb-10 text-center font-mono text-[10px] text-neutral-400">
        Made with love
      </footer>
    </main>
  );
}
