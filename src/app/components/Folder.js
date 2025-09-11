"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

export default function Folder({ title, style, content, image, position }) {
  const [isOpen, setIsOpen] = useState(false);
  const folderRef = useRef(null);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (folderRef.current && !folderRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // draggable
  useEffect(() => {
    gsap.registerPlugin(Draggable);
    if (folderRef.current) {
      // Reset position to original when component mounts
      gsap.set(folderRef.current, { x: 0, y: 0 });
      Draggable.create(folderRef.current, {
        type: "x,y",
        bounds: window,
        inertia: true,
        zIndexBoost: true,
      });
    }
  }, []);

  return (
    <div ref={folderRef} className={`absolute ${style} z-30 hidden lg:block`}>
      <div
        className="flex flex-col items-center cursor-pointer -rotate-2"
        onClick={toggleFolder}
      >
        <Image
          src="/images/folder-icon.webp"
          width={80}
          height={90}
          alt="folder"
          className="w-20 h-auto"
          loading="eager"
        />
        {/* <h3 className="backdrop-blur-sm bg-white-60 font-serif italic mt-2 px-2 rounded-lg">
          {title}
        </h3> */}
      </div>

      {/* opened folder */}
      <div
        className={`absolute ${position} transform bg-white/80 backdrop-blur-lg text-neutral-700 shadow-md rounded-md w-72 transition-all duration-200 ease ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="w-full h-6 bg-gray-100 border-y border-solid border-gray-200"></div>
        <div className="flex flex-wrap gap-y-4 gap-x-1 font-sans text-xs my-6 px-2 justify-center">
          {content.map((internal, index) => (
            <div key={index}>
              {internal.image ? (
                <>
                  <a
                    href={internal.href}
                    target="_blank"
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className="h-20 w-28 bg-cover bg-center mb-2 border-4 border-solid border-white rounded-md drop-shadow-[1px_2px_3px_rgba(0,0,0,0.2)]"
                      style={{ backgroundImage: `url(${internal.image})` }}
                    ></div>
                    <p
                      className={`${
                        internal.href && "hover:text-blue-600"
                      } text-xs w-32`}
                    >
                      {internal.text}
                    </p>
                  </a>
                </>
              ) : (
                <a
                  href={internal.href}
                  target="_blank"
                  className={internal.href ? "underline" : ""}
                >
                  <p className="w-64 text-left">{internal.text}</p>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
