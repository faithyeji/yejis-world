import Image from "next/image";

export default function CenteredImageWithCaption({
  imgSrc,
  imgAlt,
  title,
  caption,
}) {
  return (
    <div className="grid place-items-center">
      <div className="flex flex-col items-center font-sans text-sm w-full">
        <h3 className="font-mono text-xl text-gray-500 uppercase mb-2">
          {title}
        </h3>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={3000}
          height={3000}
          quality={100}
          className="w-full max-w-2xl h-fit rounded-lg"
          priority
        />
        {caption && (
          <h3 className="w-3/5 mt-6 text-center text-gray-700">{caption}</h3>
        )}
      </div>
    </div>
  );
}
