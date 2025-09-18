import Image from "next/image";
import Link from "next/link";

export default function Project({
  title,
  type,
  imageSrc,
  videoSrc,
  imageClass,
  link,
  description,
}) {
  return (
    <div className="flex gap-6 flex-wrap font-sans">
      <Link href={link} scroll>
        <div className="w-[25rem] h-fit bg-neutral-100 bg-opacity-40 backdrop-blur-sm rounded-md flex flex-col p-2 pb-6 items-left hover:bg-neutral-200 hover:scale-[1.01] transition ease-out overflow-hidden text-left">
          {/* Image or Video */}
          {videoSrc ? (
            <video
              className={`h-[14rem] w-full object-cover rounded-md transition ease-out ${
                imageClass || ""
              }`}
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <div
              className={`h-[14rem] bg-cover bg-center rounded-md transition ease-out ${
                imageClass || ""
              }`}
              style={{ backgroundImage: `url(${imageSrc})` }}
              alt={title}
            ></div>
          )}

          <div className="flex w-[21.5rem] gap-4 mx-2 items-center">
            <h3 className="mt-5 text-[1.3rem] font-serif italic">{title}</h3>
            <div className="bg-white text-blue-600 mt-4 px-2 py-1 rounded-lg font-mono text-[0.65rem]">
              {type}
            </div>
          </div>
          <p className="my-2 mx-2 text-sm leading-4 text-neutral-500">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
}
