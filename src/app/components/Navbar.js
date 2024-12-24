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
      ? "text-blue-600 border-b-2 border-blue-600"
      : "text-gray-600 hover:text-blue-600";
  };

  const mobileActive = (path) => {
    return pathname === path
      ? "bg-blue-50 text-blue-600"
      : "text-gray-600 hover:bg-gray-50";
  };

  return (
    <nav className="w-full mt-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 mt-2 ml-2">
            <Link href="/" aria-label="home">
              <GooglyEye />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex-1 flex justify-center space-x-6 sm:space-x-8 font-mono sm:ml-5 text-xs sm:text-sm font-medium">
            <Link
              href="/pages/projects"
              className={`inline-flex items-center px-1 pt-1 transition-colors duration-200 ${isActive(
                "/pages/projects"
              )}`}
            >
              PROJECTS
            </Link>
            <Link
              href="/pages/playground"
              className={`inline-flex items-center px-1 pt-1 transition-colors duration-200 ${isActive(
                "/pages/playground"
              )}`}
            >
              PLAYGROUND
            </Link>
            <Link
              href="/pages/about"
              className={`inline-flex items-center px-1 pt-1 transition-colors duration-200 ${isActive(
                "/pages/about"
              )}`}
            >
              ABOUT
            </Link>
          </div>

          {/* Logos */}
          <div className="ml-auto space-x-4 hidden sm:flex">
            <a href="https://www.linkedin.com/in/faithyejiseo/" target="_blank">
              <Image
                src="/logos/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </a>
            <a href="https://github.com/faithyeji" target="_blank">
              <Image
                src="/logos/github.svg"
                alt="GitHub"
                width={20}
                height={20}
              />
            </a>
            <a href="https://x.com/seoyemilk" target="_blank">
              <Image src="/logos/xlogo.svg" alt="X" width={20} height={20} />
            </a>
          </div>

          {/* Mobile */}
          {/* <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div> */}
        </div>

        {/* Mobile Menu */}
        {/* <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${mobileActive(
                "/"
              )}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${mobileActive(
                "/about"
              )}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${mobileActive(
                "/services"
              )}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${mobileActive(
                "/contact"
              )}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
