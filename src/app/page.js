"use client";
import Image from "next/image";
import Folder from "./components/Folder";
import CD from "./components/Disk";
import { useAudio } from "./components/AudioContext";
import { Draggable } from "gsap/Draggable";
import Project from "./components/Project";
import { useEffect, useRef } from "react";
import DraggableSticker from "./components/DraggableSticker";

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

  // sync video with audio status
  useEffect(() => {
    if (videoRef.current) {
      if (status === "playing") {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [status]);

  return (
    <main className="overflow-hidden h-full w-full">
      <div className="w-full justify-center items-center absolute top-0 h-[300px] mx-auto translate-x-1/2 origin-center overflow-y-hidden pt-12 animate-slidein opacity-0 [--slidein-delay:200ms] z-10 hidden md:flex">
        <div className="flex flex-col justify-center items-center">
          <div className="mt-3 pb-2 w-fit -translate-y-[250px] lg:-translate-y-[300px] transition">
            <CD />
          </div>
        </div>
      </div>
      <div className="animate-fadein delay-200">
        <Folder
          title="photos"
          style="top-[41%] left-[25%]"
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
          startY="36%"
          rotation={0}
        />
        <DraggableSticker
          src="/images/yeggi.webp"
          alt="folder"
          width={60}
          height={60}
          startX="31%"
          startY="32%"
          rotation={0}
        />
      </div>
      <div className="flex flex-col mt-7 md:mt-32 justify-center items-center text-center gap-2 text-neutral-600 relative">
        {/* <h1 className="font-serif italic text-5xl text-blue-700">Yeji Seo</h1> */}
        <video
          ref={videoRef}
          width="240"
          loop
          muted
          playsInline
          className="absolute top-0 animate-slidein opacity-0 [--slidein-delay:100ms]"
          priority="true"
        >
          <source src="/YejiNames2-hevc-safari.mp4" />
          <source src="/YejiNames2-vp9-chrome.webm" />
        </video>
        <p className="w-72 sm:w-80 md:w-[400px] font-mono text-sm leading-5 mt-36 sm:mt-[137px] animate-slidein opacity-0 [--slidein-delay:300ms]">
          IS A MULTIDISCIPLINARY DESIGNER DEDICATED TO CRAFTING DELIGHTFUL
          DIGITAL EXPERIENCES. <br /> <br />
          SHE WORKS MAINLY IN BRAND/ART DIRECTION, PRODUCT, & INTERACTIVE
          STORYTELLING.
        </p>
        <p className="text-[10px] mt-2 z-20 text-center font-mono text-gray-400 animate-slidein opacity-0 [--slidein-delay:700ms]">
          NOW {status == "playing" ? "PLAYING:" : "PAUSED:"} {currentSongTitle}
        </p>{" "}
        <div id="projects" className="rounded-lg mt-12">
          <div className="flex flex-wrap mt-8 mb-16 sm:mt-7 md:mx-4 justify-center items-center text-center gap-2 sm:gap-5 w-fit text-neutral-600 opacity-0 animate-slidein [--slidein-delay:500ms]">
            <Project
              title="Deeplocal"
              type="ART DIRECTION, MOTION, UI/UX, GRAPHIC"
              videoSrc="/images/projects/DL.webm"
              link="/pages/projects/deeplocal"
              description="Concepting/designing fun creative tech projects for Google, Microsoft, and Netflix experiential activations."
            />
            <Project
              title="The StoryGraph"
              type="PRODUCT, UI/U X, BRAND"
              imageSrc="/images/projects/storygraph.webp"
              link="/pages/projects/storygraph"
              description="Worked as the sole UX designer revamping a book-sharing platform with 4 million users."
            />
            <Project
              title="Climate Cents"
              type="ART DIRECTION, PRODUCT, UI DEV"
              videoSrc="/images/projects/climatecents.webm"
              link="/pages/projects/climatecents"
              description="Led development of an interactive map of nonprofit climate projects and weather data for the 2028 LA Olympics."
            />

            <Project
              title="Two Cents Club"
              type="BRAND, PRODUCT, GRAPHIC"
              imageSrc="/images/projects/tcc.webp"
              link="/pages/projects/twocentsclub"
              description="Founding designer and creative director for a community platform for post-grad learning."
            />
            <Project
              title="Fathead White Paper"
              type="GRAPHIC, PRINT"
              imageSrc="/images/projects/fathead2.webp"
              link="/pages/projects/fathead"
              description="186 pages of pure graphic design for a Cannes award-winning film's White Paper."
            />
            <Project
              title="Lumen"
              type="PRODUCT, MOTION, BRAND"
              videoSrc="/images/projects/lumen.webm"
              link="/pages/projects/lumen"
              description="Consolidating, organizing, and illuminating user feedback to highlight key insights."
            />
            {/* <Project
              title="Encore"
              type="UI/UX DESIGN (TEAM)"
              imageSrc="/images/projects/encore2.webp"
              link="/pages/projects/encore"
              description="Designing a space for aspiring musicians to find community and support."
            /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
