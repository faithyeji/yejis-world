"use client";
import Image from "next/image";
import Folder from "./components/Folder";
import CD from "./components/Disk";
import { useAudio } from "./components/AudioContext";

export default function Home() {
  const inspos = [
    {
      text: "Doechii's Tiny Desk",
      href: "https://www.youtube.com/watch?v=-91vymvIH0c",
      image: "/images/folder/doechii.webp",
    },
    {
      text: "@khwampa's MS Paint",
      href: "https://x.com/khwampa",
      image: "/images/folder/khwampa.webp",
    },
    {
      text: "Cha Cha's Art",
      href: "https://www.instagram.com/cha._cha.__/",
      image: "/images/folder/chacha.webp",
    },
    {
      text: "Prosperity's DJing",
      href: "https://www.instagram.com/prosperityroom/?hl=en",
      image: "/images/folder/prosperity.webp",
    },
  ];

  const musings = [
    {
      text: "if art decorates space, music decorates time.",
    },
    {
      text: "why I believe the urinal fly is one of the BEST examples of design.",
      href: "https://www.washingtonpost.com/news/wonk/wp/2017/10/09/whats-a-urinal-fly-and-what-does-it-have-to-with-winning-a-nobel-prize/",
    },
  ];

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
          title="current inspos"
          style="top-[37%] left-[13%]"
          content={inspos}
          position="top-[110%] left-[8%] origin-[0%-30%]"
        />
        <Folder
          title="musings"
          style="top-[20%] right-[12%]"
          content={musings}
          position="top-[110%] right-[2%] origin-[100%-30%]"
        />
        <Folder
          title="photos"
          style="bottom-[25%] right-[15%]"
          content={photos}
          position="bottom-[120%] right-[-60%] origin-bottom"
        />
      </div>
      <div className="flex flex-col mt-24 md:mt-[122px] justify-center items-center text-center gap-2 text-neutral-600 relative">
        {/* <h1 className="font-serif italic text-5xl text-blue-700">Yeji Seo</h1> */}
        <video
          width="240"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 animate-slidein opacity-0 [--slidein-delay:100ms]"
        >
          <source src="/yejinames-hevc.mov" />
          <source src="/yejinames.webm" />
        </video>
        <p className="w-72 sm:w-80 md:w-[400px] font-mono text-sm leading-5 mt-36 sm:mt-[137px] animate-slidein opacity-0 [--slidein-delay:300ms]">
         IS A MULTIDISCIPLINARY DESIGNER x CREATIVE TECHNOLOGIST DEDICATED TO CRAFTING EXPERIENCES THAT EVOKE DELIGHT & PLAY. <br/> <br/>DESPITE A PASSION FOR EVERYTHING CREATIVE, SHE SPECIALIZES IN DIGITAL ART DIRECTION, BRAND, WEB, PRODUCT, & INTERACTIVE STORYTELLING.
        </p>
      </div>
      {/* cd */}
      <div className="flex w-full justify-center items-center h-[380px] absolute bottom-0 mx-auto translate-x-1/2 origin-center overflow-y-hidden pt-12 animate-slidein opacity-0 [--slidein-delay:700ms] z-10">
        <div className="mt-3">
          <CD />
        </div>
      </div>
      <div className="hidden sm:flex justify-between w-full font-mono absolute bottom-6 text-neutral-600 z-0">
        <p className="text-xs ml-8">
          NOW {status == "playing" ? "PLAYING:" : "PAUSED:"} {currentSongTitle}
        </p>{" "}
        <p className="text-xs mr-8">CODED WITH NEXTJS AND &lt;3</p>
      </div>
    </main>
  );
}
