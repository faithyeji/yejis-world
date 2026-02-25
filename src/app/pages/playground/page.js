"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./playground.css";
import PlaygroundVideo from "@/app/components/PlaygroundVideo";
import { playgroundItems as items } from "./items";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export default function Playground() {
  const [filter, setFilter] = useState("all");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setIsDesktop(true);
    }
  }, []);

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.category === filter);

  return (
    <main
      className="overflow-hidden"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      <div className="mx-5 sm:mx-20 flex flex-col sm:flex-row gap-12 mt-8">
        <div className="hidden sm:flex flex-col justify-start gap-4 mb-4 font-mono text-xs min-w-max items-start text-left opacity-0 animate-slidein [--slidein-delay:400ms]">
          <h1 className="font-franklin text-5xl">FILTER</h1>
          <button
            onClick={() => setFilter("all")}
            className={filter === "all" ? "text-blue-500" : ""}
          >
            EVERYTHING (ALL @ ONCE)
          </button>
          <button
            onClick={() => setFilter("graphics")}
            className={filter === "graphics" ? "text-blue-500" : ""}
          >
            GRAPHICS
          </button>
          <button
            onClick={() => setFilter("motion")}
            className={filter === "motion" ? "text-blue-500" : ""}
          >
            MOTION / 3D
          </button>
          <button
            onClick={() => setFilter("illustration")}
            className={filter === "illustration" ? "text-blue-500" : ""}
          >
            ILLUSTRATION
          </button>
          <button
            onClick={() => setFilter("experiments")}
            className={filter === "experiments" ? "text-blue-500" : ""}
          >
            EXPERIMENTS
          </button>
        </div>

        {/* Gallery */}
        <motion.div
          className="container columns-2 md:columns-3 lg:columns-4 gap-x-2 sm:gap-x-5 w-[400px] sm:w-[1200px] opacity-0 animate-slidein [--slidein-delay:700ms]"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.src}
                className="box relative group"
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => {
                  if (!item.link) setSelectedItem(item); // modal only if no link
                }}
              >
                <div className="relative">
                  {item.link && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-white/80 backdrop-blur-md border border-gray-300 rounded-full flex items-center justify-center z-20 transition-transform duration-100 group-hover:scale-110 group-hover:bg-white/90">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <g data-name="Layer 2">
                          <g data-name="diagonal-arrow-right-up">
                            <rect
                              width="24"
                              height="24"
                              transform="rotate(180 12 12)"
                              opacity="0"
                            />
                            <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  )}
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.type === "image" ? (
                        <Image
                          src={item.src}
                          alt={item.alt}
                          layout="responsive"
                          width={500}
                          height={500}
                          load="lazy"
                        />
                      ) : (
                        <PlaygroundVideo src={item.src} className="w-full" />
                      )}
                    </a>
                  ) : item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout="responsive"
                      width={500}
                      height={500}
                      load="lazy"
                    />
                  ) : (
                    <PlaygroundVideo src={item.src} className="w-full" />
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {/* Hover popup */}
        <AnimatePresence>
          {hoveredItem && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{
                position: "fixed",
                top: mousePos.y + 20,
                left: mousePos.x + 20,
                zIndex: 50,
              }}
              className="bg-white/80 backdrop-blur-lg border border-gray-300 p-4 rounded shadow-xl max-w-60"
            >
              <div className="font-serif text-black leading-[18px] text-lg font-medium mb-1 italic">
                {hoveredItem.alt}
              </div>
              <div className="font-mono text-gray-500 uppercase text-xs">
                {hoveredItem.tool}
              </div>
              {hoveredItem.description && (
                <div className="font-sans text-xs mt-2">
                  {hoveredItem.description}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                className="bg-white rounded-lg w-fit p-4 relative flex justify-center"
                initial={{ scale: 0.3 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.3 }}
                onClick={(e) => e.stopPropagation()} // prevent modal close
              >
                {selectedItem.type === "image" ? (
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    width={1600}
                    height={800}
                    className="h-[670px] w-auto object-contain rounded"
                  />
                ) : (
                  <PlaygroundVideo src={selectedItem.src} className="w-full" />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
