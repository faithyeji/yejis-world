"use client";
import Image from "next/image";
import Folder from "./components/Folder";
import CD from "./components/Disk";
import { useAudio } from "./components/AudioContext";
import { Draggable } from "gsap/Draggable";
import Project from "./components/Project";
import { useEffect } from "react";

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

  return (
    <main className="overflow-hidden h-full w-full">
      <div className="animate-fadein">
        <Folder
          title="photos"
          style="top-[39%] left-[23%]"
          content={photos}
          position="top-[110%] left-[8%] origin-[0%-30%]"
        />
        <Image
          src="/images/codedwithlove.webp"
          width={100}
          height={100}
          alt="folder"
          className="w-27 h-auto absolute hidden lg:block top-[30%] right-[24%]"
          loading="eager"
        />
        <Image
          src="/images/yeggi.webp"
          width={100}
          height={100}
          alt="folder"
          className="w-16 h-auto absolute hidden lg:block left-[28%] top-[29%]"
          loading="eager"
        />
      </div>
      <div className="flex flex-col mt-24 md:mt-20 justify-center items-center text-center gap-2 text-neutral-600 relative">
        {/* <h1 className="font-serif italic text-5xl text-blue-700">Yeji Seo</h1> */}
        <video
          width="240"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 animate-slidein opacity-0 [--slidein-delay:100ms]"
        >
          <source src="/YejiNames2-hevc-safari.mp4" />
          <source src="/YejiNames2-vp9-chrome.webm" />
        </video>
        <p className="w-72 sm:w-80 md:w-[400px] font-mono text-sm leading-5 mt-36 sm:mt-[137px] animate-slidein opacity-0 [--slidein-delay:300ms]">
          IS A MULTIDISCIPLINARY DESIGNER DEDICATED TO CRAFTING EXPERIENCES THAT
          EVOKE DELIGHT & PLAY. <br /> <br />
          SHE (DESPITE A PASSION FOR EVERYTHING CREATIVE) SPECIALIZES IN DIGITAL
          ART DIRECTION, BRAND, WEB/PRODUCT, & INTERACTIVE STORYTELLING.
        </p>
        <div className="flex w-full justify-center items-center h-[300px] mx-auto translate-x-1/2 origin-center overflow-y-hidden pt-12 animate-slidein opacity-0 [--slidein-delay:700ms] z-10">
          <div className="flex flex-col justify-center items-center">
            <div className="mt-3 pb-2 w-fit">
              <CD />
            </div>
            <div className="mt-2 bg-[linear-gradient(90deg,rgba(168,168,168,1)_0%,rgba(222,222,222,1)_27%,rgba(168,168,168,1)_100%)] opacity-75 drop-shadow-md w-[525px] rounded-md h-1 z-30"></div>
          </div>
        </div>
        <p className="text-[10px] mt-2 z-20 text-center font-mono text-gray-400 animate-slidein opacity-0 [--slidein-delay:700ms]">
          NOW {status == "playing" ? "PLAYING:" : "PAUSED:"} {currentSongTitle}
        </p>{" "}
        <div id="projects" className="rounded-lg mt-8">
          <div className="flex flex-wrap mt-8 mb-16 sm:mt-12 md:mx-32 justify-center items-center text-center gap-8 w-fit text-neutral-600">
            <Project
              title="The StoryGraph"
              type="UI/UX DESIGN"
              imageSrc="/images/projects/storygraph.webp"
              link="/pages/projects/storygraph"
              description="Working as the sole UX designer for a book-sharing platform with 3 million users."
            />
            <Project
              title="Lumen"
              type="UX/BRANDING"
              imageSrc="/images/projects/lumen.webp"
              link="/pages/projects/lumen"
              description="Collecting, organizing, and illuminating user feedback to highlight key insights."
            />
            <Project
              title="Namu"
              type="DESIGN, FULL-STACK DEV"
              imageSrc="/images/projects/namu.webp"
              link="/pages/projects/namu"
              description="A digital garden where work-in-progresses and unfinished projects can grow."
            />
            <Project
              title="Encore"
              type="UI/UX DESIGN (TEAM)"
              imageSrc="/images/projects/encore2.webp"
              link="/pages/projects/encore"
              description="Designing a space for aspiring musicians to find community and support."
            />
            <Project
              title="Fathead WP"
              type="GRAPHIC DESIGN"
              imageSrc="/images/projects/fatheadkid.webp"
              link="/pages/projects/fathead"
              description="186 pages of pure graphic design for the NAACP award-winning film's White Paper."
            />
            <Project
              title="Synth"
              type="CREATIVE CODING"
              imageSrc="/images/projects/synth.webp"
              link="/pages/projects/synth"
              description="A TouchDesigner project that plays with hand & midi inputs to visualize music in real-time."
            />
          </div>
        </div>
      </div>
    </main>
  );
}
