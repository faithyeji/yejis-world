import Image from "next/image";

export default function TextWithMedia({
  title,
  children,
  mediaSrc,
  mediaAlt,
  mediaPosition = "right",
}) {
  if (!mediaSrc) {
    return (
      <div className="grid grid-cols-1 items-center justify-items-center gap-6">
        <div className="flex flex-col mt-4 w-[90%] items-center">
          <h3 className="font-mono text-xl text-gray-500 uppercase mb-2 leading-6 text-left w-full">
            {title}
          </h3>
          <div className="text-gray-700 font-sans text-sm mt-2 text-left w-full">
            {children}
          </div>
        </div>
      </div>
    );
  }

  const isVideo = /\.(mp4|webm|ogg)$/i.test(mediaSrc);

  return (
    <div
      className={`
        grid grid-cols-1 lg:grid-cols-2 
        items-stretch justify-items-stretch gap-8
      `}
    >
      <div
        className={`flex flex-col w-[90%] mx-auto justify-center h-full ${
          mediaPosition === "left" ? "lg:order-2" : ""
        }`}
      >
        <h3 className="font-mono text-xl text-gray-500 uppercase pt-8 mb-2 leading-6 text-left w-full">
          {title}
        </h3>
        <div className="text-gray-700 font-sans mt-2 text-[0.9rem] text-left w-full">
          {children}
        </div>
      </div>

      <div
        className={`w-full h-full flex items-center justify-center ${
          mediaPosition === "left" ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {isVideo ? (
          <video
            src={mediaSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain rounded-lg"
          />
        ) : (
          <Image
            src={mediaSrc}
            alt={mediaAlt || "Media"}
            width={500}
            height={400}
            className="w-full h-full object-contain rounded-lg drop-shadow-lg"
            priority
          />
        )}
      </div>
    </div>
  );
}
