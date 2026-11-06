import PaintedStreet from "../../components/paintedStreet/PaintedStreet";

export default function About() {
  return (
    <main className="overflow-hidden">
      <div className="relative z-20 px-8 lg:px-12 pt-6 sm:pt-12 flex justify-center pointer-events-none">
        <div className="pointer-events-auto flex flex-col gap-4 w-full max-w-[52rem] font-serif text-neutral-600 text-base sm:text-lg leading-[1.3] text-center">
          <p className="animate-slidein opacity-0 [--slidein-delay:200ms]">
            Yeji Seo is a designer passionate in creating and learning in
            intersections. Whether that means painting a wall or coding an app,
            she&apos;s guided by a desire to make any
            experience she touches feel human and fun.
          </p>
          <p className="animate-slidein opacity-0 [--slidein-delay:350ms]">
            Outside of work, you can find her:{" "}
            <a href="https://www.instagram.com/seoyemilk/" target="_blank" className="underline">
              sketching
            </a>
            , DJing, or saying hello to the pigeons. Email her{" "}
            <a href="mailto:faithyejiseo@gmail.com" target="_blank" className="underline">
              here
            </a>
            !
          </p>
        </div>
      </div>
      <div className="relative z-0 -mt-4 sm:-mt-8">
        <PaintedStreet />
      </div>
    </main>
  );
}
