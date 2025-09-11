"use client";
import Image from "next/image";
import Folder from "./components/Folder";
import CD from "./components/Disk";
import { useAudio } from "./components/AudioContext";
import { Draggable } from "gsap/Draggable";

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

  return (
    <main className="overflow-hidden h-full w-full">
      <div className="animate-fadein">
        <Folder
          title="photos"
          style="top-[37%] left-[19%]"
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
          className="w-16 h-auto absolute hidden lg:block left-[27%] top-[29%]"
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
      </div>
      {/* cd */}
      <div className="flex w-full justify-center items-center h-[300px] absolute bottom-28 mx-auto translate-x-1/2 origin-center overflow-y-hidden pt-12 animate-slidein opacity-0 [--slidein-delay:700ms] z-10">
        <div className="flex flex-col justify-center items-center">
          <div className="mt-3 pb-2 w-fit">
            <CD />
          </div>
          <div className="mt-2 bg-[linear-gradient(90deg,rgba(168,168,168,1)_0%,rgba(222,222,222,1)_27%,rgba(168,168,168,1)_100%)] opacity-75 drop-shadow-md w-[525px] rounded-md h-2 z-30"></div>
        </div>
      </div>
      {/* <div className="hidden sm:flex justify-between w-full font-mono absolute bottom-6 text-neutral-600 z-0">
        <p className="text-xs ml-8">
          NOW {status == "playing" ? "PLAYING:" : "PAUSED:"} {currentSongTitle}
        </p>{" "}
        <p className="text-xs mr-8">CODED WITH NEXTJS AND &lt;3</p>
      </div> */}
    </main>
  );
}
