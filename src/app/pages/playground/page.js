"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./playground.css";

const items = [
  // Illustration
  {
    type: "image",
    src: "/images/playground/drawings/doodling.webp",
    alt: "Doodling",
    category: "illustration",
  },
  {
    type: "image",
    src: "/images/playground/drawings/childsplay.webp",
    alt: "Child's Play",
    category: "illustration",
  },
  {
    type: "image",
    src: "/images/playground/drawings/JoseonMetro.webp",
    alt: "Joseon Metro",
    category: "illustration",
  },
  {
    type: "image",
    src: "/images/playground/drawings/crayons.webp",
    alt: "Crayons",
    category: "illustration",
  },
  {
    type: "image",
    src: "/images/playground/drawings/theMan.webp",
    alt: "The Man",
    category: "illustration",
  },
  {
    type: "image",
    src: "/images/playground/drawings/botstancomp.webp",
    alt: "Botstan Comp",
    category: "illustration",
  },
  {
    type: "image",
    src: "/images/playground/drawings/alien.webp",
    alt: "Alien",
    category: "illustration",
  },
  {
    type: "image",
    src: "/images/playground/graphics/colorful.webp",
    alt: "Colorful",
    category: "illustration",
  },

  // Graphics
  {
    type: "image",
    src: "/images/playground/graphics/ebaesFlyer.webp",
    alt: "Ebae's Flyer",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/dublab.webp",
    alt: "dublab",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/jazzfest.webp",
    alt: "jazz",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/kaytra.webp",
    alt: "kaytra",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/ConquestMap.webp",
    alt: "Conquest Map",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/fathead4.webp",
    alt: "Fathead 4",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/deck.webp",
    alt: "Deck",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/welcome.webp",
    alt: "Welcome",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/fathead2.webp",
    alt: "Fathead 2",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/activist.webp",
    alt: "Activist",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/fathead6.webp",
    alt: "Fathead 6",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/europa.webp",
    alt: "Europa",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/dublab_new.webp",
    alt: "dublabnew",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/fathead5.webp",
    alt: "Fathead 5",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/fathead3.webp",
    alt: "Fathead 3",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/devworkshop.webp",
    alt: "Dev Workshop",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/fathead1.webp",
    alt: "Fathead 1",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/experiments/YEJI.webp",
    alt: "YEJI",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/brand/grocerase.webp",
    alt: "Grocerase",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/brand/treffa.webp",
    alt: "Treffa",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/1dayleft.webp",
    alt: "1dayleft",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/totoro.webp",
    alt: "Totoro",
    category: "graphics",
  },

  // motion x 3d
  {
    type: "image",
    src: "/images/playground/experiments/jeong.webp",
    alt: "Jeong",
    category: "motion",
  },
  {
    type: "image",
    src: "/images/playground/experiments/woodenBox.webp",
    alt: "Wooden Box",
    category: "motion",
  },
  {
    type: "video",
    src: "/images/playground/experiments/AllCardsVideo.webm",
    alt: "All Cards Video",
    category: "motion",
  },
  {
    type: "image",
    src: "/images/playground/experiments/hanok.webp",
    alt: "Hanok",
    category: "motion",
  },
  {
    type: "image",
    src: "/images/playground/experiments/domoscene.webp",
    alt: "Domo Scene",
    category: "motion",
  },
  {
    type: "video",
    src: "/images/playground/graphics/seesawreel.webm",
    alt: "SeeSaw",
    category: "motion",
  },
  {
    type: "video",
    src: "/images/playground/motion/recruit1.webm",
    alt: "CTC recruitment",
    category: "motion",
  },
  {
    type: "video",
    src: "/images/playground/motion/tangshorter.webm",
    alt: "hand drawn Tang",
    category: "motion",
  },

  // experiments
  {
    type: "image",
    src: "/images/playground/experiments/tableclothShirt.webp",
    alt: "Tablecloth Shirt",
    category: "experiments",
  },
  {
    type: "image",
    src: "/images/playground/experiments/spoonButler.webp",
    alt: "Spoon Butler",
    category: "experiments",
  },
  {
    type: "video",
    src: "/images/playground/experiments/smelllog.webm",
    alt: "Smelllog",
    category: "experiments",
  },
  {
    type: "image",
    src: "/images/playground/experiments/deskDumpster.webp",
    alt: "Desk Dumpster",
    category: "experiments",
  },
  {
    type: "image",
    src: "/images/playground/experiments/lamp.webp",
    alt: "Lamp",
    category: "experiments",
  },
];

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

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.category === filter);

  return (
    <main className="overflow-hidden">
      <div className="mx-20 flex flex-col sm:flex-row gap-12 mt-8">
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
          className="container columns-2 sm:columns-4 gap-x-2 sm:gap-x-5 w-[400px] sm:w-[1200px]  opacity-0 animate-slidein [--slidein-delay:600ms]"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.src}
                className="box"
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    layout="responsive"
                    width={500}
                    height={500}
                  />
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full"
                  ></video>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
