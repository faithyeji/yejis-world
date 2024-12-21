import Image from "next/image";
export default function About() {
  return (
    <main className="overflow-hidden">
      <div className="flex flex-col sm:flex-row mt-2 sm:mt-20 justify-center items-center sm:items-start text-center gap-8 sm:gap-12 text-neutral-600">
        <div className="relative group h-fit mt-8 opacity-0 animate-slidein [--slidein-delay:400ms]">
          <Image
            src="/images/elmo.webp"
            width={100}
            height={300}
            alt="Elmo"
            className="absolute -rotate-6 left-10 top-10 group-hover:opacity-100 group-hover:-translate-y-20 transition ease-out"
          />
          <Image
            src="/images/yejipolaroid.webp"
            width={300}
            height={500}
            alt="Yeji Polaroid"
            className="-rotate-3 hover:scale-[1.02] hover:rotate-2 transition ease object-contain"
          />
        </div>

        <div className="flex flex-col font-sans gap-4 mb-20 sm:mt-6 w-8/12 sm:w-1/3 text-center sm:text-left">
          <h1 className="font-serif italic text-2xl animate-slidein opacity-0 [--slidein-delay:200ms]">
            {" "}
            Hi, welcome to my world! <span className="not-italic">🐦‍⬛</span>
          </h1>
          <div className="flex flex-col gap-6 text-sm sm:text-base">
            <p className="animate-slidein opacity-0 [--slidein-delay:400ms]">
              At heart, I'm a designer passionate in crafting meaningful digital
              experiences. After falling in love with code as a medium with
              infinite potential to create, I live now in the exciting (and
              sometimes-silly) space where technology meets art.
            </p>
            <p className="animate-slidein opacity-0 [--slidein-delay:500ms]">
              Outside of work, you can find me:{" "}
              <a
                href="https://www.instagram.com/seoyemilk/"
                target="_blank"
                className="underline"
              >
                sketching
              </a>
              , starting another book, Letterboxd logging the latest film I
              watched, or drinking soymilk.
            </p>
            <p className="animate-slidein opacity-0 [--slidein-delay:600ms]">
              <span className="font-mono text-md text-blue-500">
                CURRENT ADVENTURE:
              </span>
              <br />
              Studying integrated Computer Science, Product Design, and
              Entrepreneurship at USC's{" "}
              <a
                href="https://iovine-young.usc.edu/"
                target="_blank"
                className="underline"
              >
                Iovine and Young Academy
              </a>
              . <br />
              Also revamping{" "}
              <a
                href="https://app.thestorygraph.com/"
                target="_blank"
                className="underline"
              >
                The StoryGraph
              </a>
              .
            </p>
            <p className="animate-slidein opacity-0 [--slidein-delay:700ms]">
              <span className="font-mono text-md text-blue-500">
                MY PHILOSOPHIES:
              </span>
              <br />
              <span className="font-mono text-xs mr-1 text-neutral-500">
                [01]
              </span>{" "}
              never losing childish wonder—always learning!
              <br />
              <span className="font-mono text-xs mr-1 text-neutral-500">
                [02]
              </span>{" "}
              working and studying in intersections.
              <br />
              <span className="font-mono text-xs mr-1 text-neutral-500">
                [03]
              </span>
              trying to leave things better than I found them.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
