"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import GooglyEye from "./GooglyEye";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return pathname === path
      ? "text-blue-600"
      : "text-gray-600 hover:text-blue-600";
  };

  const mobileActive = (path) => {
    return pathname === path
      ? "bg-blue-50 text-blue-600"
      : "text-gray-600 hover:bg-gray-50";
  };

  return (
    <nav className="w-full mt-5">
      <div className="w-full mx-auto px-8 flex justify-between items-center h-16">
        <div className="flex-shrink-0 mt-2 ml-2">
          <Link href="/" aria-label="home" className="relative z-[100]">
            <GooglyEye />
          </Link>
        </div>

        <div
          className="flex flex-row items-center md:flex-col md:items-start lg:flex-row lg:items-center 
                space-x-0 md:space-x-0 space-y-0 font-mono text-xs sm:text-sm font-medium"
        >
          <Link
            href={pathname === "/" ? "/#projects" : "/"}
            className={`inline-flex px-1 pt-1 transition-colors duration-200 relative z-[100] ${isActive(
              "/pages/projects"
            )}`}
          >
            [WORK]
          </Link>
          <Link
            href="/pages/playground"
            className={`inline-flex px-1 pt-1 transition-colors duration-200 relative z-[100] ${isActive(
              "/pages/playground"
            )}`}
          >
            [PLAYGROUND]
          </Link>
          <Link
            href="/pages/about"
            className={`inline-flex px-1 pt-1 transition-colors duration-200 relative z-[100] ${isActive(
              "/pages/about"
            )}`}
          >
            [ABOUT]
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
