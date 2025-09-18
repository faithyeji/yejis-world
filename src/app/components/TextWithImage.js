import Image from "next/image";

export default function TextWithImage({ title, children, imgSrc, imgAlt }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-items-center">
      {/* Left column: text */}
      <div className="flex flex-col mt-4 w-[90%] items-center">
        <h3 className="font-mono text-xl text-gray-500 uppercase mb-2 leading-6">
          {title}
        </h3>
        <p className="text-gray-700 font-sans text-sm mt-2">{children}</p>
      </div>

      {/* Right column: image */}
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={500}
        height={400}
        className="w-full h-fit rounded-lg drop-shadow-lg"
        priority
      />
    </div>
  );
}
