"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

export default function Folder({ title, style, content, position }) {
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

  return (
    <div ref={folderRef} className={`absolute ${style} z-10 hidden sm:block`}>
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={toggleFolder}
      >
        <Image
          src="/images/folder-icon.webp"
          width={105}
          height={90}
          alt="folder"
          loading="eager"
        />
        <h3 className="font-serif italic mt-2">{title}</h3>
      </div>

      {/* opened folder */}
      <div
        className={`absolute ${position} transform bg-white/60 backdrop-blur-lg text-neutral-500 shadow-md rounded-md w-64 transition-all duration-100 ease-out ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="w-full h-6 bg-gray-200"></div>
        <div className="flex flex-col gap-4 font-sans text-sm p-3">
          {content.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              className={link.href ? "underline" : ""}
            >
              <p>{link.text}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
