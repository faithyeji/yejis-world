import Image from "next/image";
import CD from "./components/Disk";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="flex flex-col mt-40 justify-center items-center text-center gap-2 text-neutral-600 relative">
        {/* <h1 className="font-serif italic text-5xl text-blue-700">Yeji Seo</h1> */}
        <img
          src="./smalleryeji.gif"
          alt="alternate yejis"
          width="210"
          className="absolute top-0"
        />
        <p className="w-52 sm:w-96 font-sans text-lg leading-6 mt-28">
          is a{" "}
          <span className="bg-[#d4e6ff] mx-1 px-2 py-0.5 rounded-lg text-black font-mono text-xs">
            ?????
          </span>{" "}
          who loves to play in: product design, ui/ux, front-end dev,
          prototyping, and ++ways to make the web a more fun place.
        </p>
      </div>
      {/* cd */}
      <div className="flex justify-center mt-11 h-96 overflow-hidden relative pt-12">
        <div className="mt-4">
          <CD />
        </div>
      </div>
      <div className="flex justify-between w-full font-mono absolute bottom-6 text-neutral-600">
        <p className="text-xs ml-8">NOW PLAYING: BEAT LAMENTS THE WORLD</p>
        <p className="text-xs mr-8">CODED WITH NEXTJS AND &lt;3</p>
      </div>
    </main>
  );
}
