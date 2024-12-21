import Image from "next/image";
import Folder from "./components/Folder";
import CD from "./components/Disk";
export default function Home() {
  const inspos = [
    {
      text: "Doechii's Tiny Desk",
      href: "https://www.youtube.com/watch?v=-91vymvIH0c",
    },
    { text: "MS PAINT GOD @khwampa", href: "https://x.com/khwampa" },
    { text: "Example Link 3", href: "https://example3.com" },
  ];

  const musings = [
    {
      text: "if art decorates space, music decorates time.",
    },
    {
      text: "the urinal fly is one of the BEST examples of design.",
      href: "https://www.washingtonpost.com/news/wonk/wp/2017/10/09/whats-a-urinal-fly-and-what-does-it-have-to-with-winning-a-nobel-prize/",
    },
    {
      text: "our current expectation of realism in film is why it's just not as FUN anymore.",
    },
  ];

  const photos = [
    {
      text: "hi! i'm currently empty.",
    },
  ];

  return (
    <main className="overflow-hidden">
      <Folder
        title="current inspos"
        style="top-[40%] left-[15%] animate-slidein opacity-0 [--slidein-delay:400ms]"
        content={inspos}
        position="top-[110%] left-[20%] origin-[0%-40%]"
      />
      <Folder
        title="musings"
        style="top-[20%] right-[12%] animate-slidein opacity-0 [--slidein-delay:500ms]"
        content={musings}
        position="top-[110%] right-[5%] origin-[100%-30%]"
      />
      <Folder
        title="photos"
        style="bottom-[20%] right-[16%] animate-slidein opacity-0 [--slidein-delay:500ms]"
        content={photos}
        position="bottom-[90%] right-[-120%] origin-[-20%-30%]"
      />
      <div className="flex flex-col mt-40 justify-center items-center text-center gap-2 text-neutral-600 relative">
        {/* <h1 className="font-serif italic text-5xl text-blue-700">Yeji Seo</h1> */}
        <img
          src="./smalleryeji.gif"
          alt="alternate yejis"
          width="210"
          className="absolute top-0 animate-slidein opacity-0 [--slidein-delay:200ms]"
        />
        <p className="w-52 sm:w-96 font-sans text-lg leading-6 mt-28 animate-slidein opacity-0 [--slidein-delay:500ms]">
          is a{" "}
          <span className="bg-[#d4e6ff] mx-1 px-2 py-0.5 rounded-lg text-black font-mono text-xs">
            ?????
          </span>{" "}
          who loves to play in: product design, ui/ux, front-end dev,
          prototyping, and ++ways to make the web a more fun place.
        </p>
      </div>
      {/* cd */}
      <div className="flex justify-center mt-11 h-96 overflow-hidden relative pt-12 animate-slidein opacity-0 [--slidein-delay:700ms]">
        <div className="mt-4">
          <CD />
        </div>
      </div>
      <div className="hidden sm:flex justify-between w-full font-mono absolute bottom-6 text-neutral-600">
        <p className="text-xs ml-8">NOW PLAYING: BEAT LAMENTS THE WORLD</p>
        <p className="text-xs mr-8">CODED WITH NEXTJS AND &lt;3</p>
      </div>
    </main>
  );
}
