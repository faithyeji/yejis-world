"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./playground.css";

const items = [
  {
    type: "video",
    src: "/images/playground/motion/synth.webm",
    alt: "Synth",
    tool: "TouchDesigner",
    description:
      "A real-time music visualizer that plays with hand & midi inputs!",
    link: "https://drive.google.com/file/d/1DVNiTyK964iSHWizV1mqaYqbdLrnYjqL/view",
    category: "experiments",
  },
  // Illustration
  {
    type: "image",
    src: "/images/playground/drawings/doodling.webp",
    alt: "Type Doodling",
    tool: "Ink",
    category: "illustration",
  },
  {
    type: "image",
    src: "/images/playground/drawings/childsplay.webp",
    alt: "Child's Play",
    tool: "Procreate",
    category: "illustration",
  },
  {
    type: "image",
    src: "/images/playground/drawings/JoseonMetro.webp",
    alt: "Joseon Metro",
    tool: "Ink",
    category: "illustration",
  },
  {
    type: "image",
    src: "/images/playground/drawings/crayons.webp",
    alt: "Dream State",
    tool: "Crayon, Ink",
    category: "illustration",
  },
  {
    type: "image",
    src: "/images/playground/drawings/theMan.webp",
    alt: "The Man",
    tool: "Freehand Ink",
    category: "illustration",
  },
  {
    type: "image",
    src: "/images/playground/drawings/botstancomp.webp",
    alt: "Lights Out",
    tool: "Photoshop, Procreate",
    description:
      "A research art piece / writing on the dying influence of Neon in Hong Kong.",
    category: "illustration",
  },
  {
    type: "image",
    src: "/images/playground/drawings/alien.webp",
    alt: "Alien",
    tool: "Procreate",
    category: "illustration",
  },
  {
    type: "image",
    src: "/images/playground/graphics/colorful.webp",
    alt: "Arts, Grooves, Foods",
    tool: "Procreate",
    description:
      "Promotional branding illustration for a student-run festival showcasing local artists!",
    category: "illustration",
  },

  // Graphics
  {
    type: "image",
    src: "/images/playground/graphics/ebaesFlyer.webp",
    alt: "Ebaes Flyer",
    tool: "Photoshop",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/dublab.webp",
    alt: "Dublab",
    tool: "Figma",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/jazzfest.webp",
    alt: "The 16th Pittsburgh International Jazz Festival",
    tool: "Photoshop",
    description:
      "Limited-edition poster created to be sold at the PIJF. Grand Prize award-winner of their first poster competition!",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/dublab_new.webp",
    alt: "Dublab Residents",
    tool: "Photoshop",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/kaytra.webp",
    alt: "Dance Dance Dance!",
    tool: "Photoshop",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/ConquestMap.webp",
    alt: "Conquest Map",
    tool: "Photoshop",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/fathead4.webp",
    alt: "Brian Pohl",
    tool: "Photoshop, InDesign",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/welcome.webp",
    alt: "Suite 6",
    tool: "Photoshop",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/fathead2.webp",
    alt: "Dane Brehm",
    tool: "Photoshop",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/activist.webp",
    alt: "Activist Incubator",
    tool: "Figma",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/fathead6.webp",
    alt: "Maddi Mays",
    tool: "Photoshop, InDesign",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/europa.webp",
    alt: "Europa White Paper",
    tool: "Figma",
    category: "graphics",
  },
  {
    type: "video",
    src: "/images/playground/experiments/smelllog.webm",
    alt: "LA Smell Log",
    tool: "HTML/CSS/JS",
    description:
      "A data project in which I tracked and visualized every smell I encountered in LA for 30 days.",
    link: "https://www.figma.com/proto/RuDfBtR4W1SO2kExfFLcKm/PORTFOLIO-DECKS?page-id=0%3A1&node-id=2002-1793&viewport=2164%2C-32%2C0.07&t=JE604n1QSV4gjVyb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A425",
    category: "experiments",
  },
  {
    type: "image",
    src: "/images/playground/drawings/blaze.webp",
    alt: "Mural for Blaze Pizza",
    tool: "Procreate, Illustrator",
    description:
      "Getting to singlehandedly draw a mural was one of the coolest experiences I've done. Check it out in-person at the Figueroa LA location!",
    link: "https://www.linkedin.com/posts/faithyejiseo_the-part-of-mural-making-i-love-most-isn-activity-7320946487197077505-96yI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYyotIBlxa02TH6E94nSP4iyBsmVI-QZOs",
    category: "illustration",
  },
  {
    type: "image",
    src: "/images/playground/graphics/fathead5.webp",
    alt: "Fathead",
    tool: "Photoshop, InDesign",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/fathead3.webp",
    alt: "Eric Rigney",
    tool: "Photoshop, Indesign",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/devworkshop.webp",
    alt: "Web Dev Workshop",
    tool: "Figma, Photoshop",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/fathead1.webp",
    alt: "Fathead Stats",
    tool: "Photoshop",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/experiments/YEJI.webp",
    alt: "Y(egg)I",
    tool: "Photoshop",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/brand/grocerase.webp",
    alt: "Grocerase",
    tool: "Photoshop",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/brand/treffa.webp",
    alt: "Treffa",
    tool: "Photoshop, Figma",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/1dayleft.webp",
    alt: "Code the Change",
    tool: "Figma",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/graphics/totoro.webp",
    alt: "Totoro",
    tool: "Photoshop",
    category: "graphics",
  },

  // motion x 3d
  {
    type: "image",
    src: "/images/playground/experiments/woodenBox.webp",
    alt: "Tea Box for Mom",
    tool: "Woodworking",
    category: "motion",
  },
  {
    type: "image",
    src: "/images/playground/experiments/jeong.webp",
    alt: "Jeong",
    tool: "Blender",
    description: "A magical potion that cures homesickness.",
    category: "motion",
  },
  {
    type: "video",
    src: "/images/playground/experiments/AllCardsVideo.webm",
    alt: "Haute Magazine Valentine's Fundraiser Promo",
    tool: "After Effects, Photoshop",
    category: "motion",
  },
  {
    type: "image",
    src: "/images/playground/experiments/hanok.webp",
    alt: "Hallabong Hanok",
    tool: "SketchUp",
    category: "motion",
  },
  {
    type: "image",
    src: "/images/playground/experiments/domoscene.webp",
    alt: "College Domo",
    tool: "Fusion, Photoshop",
    category: "motion",
  },
  {
    type: "video",
    src: "/images/playground/graphics/seesawreel.webm",
    alt: "SeeSaw Murals Promo",
    tool: "After Effects, Photoshop",
    category: "motion",
  },
  {
    type: "video",
    src: "/images/playground/motion/recruit1.webm",
    alt: "CTC Recruitment",
    tool: "After Effects, Figma",
    category: "motion",
  },
  {
    type: "video",
    src: "/images/playground/motion/tangshorter.webm",
    alt: "IYA Pitch Video",
    tool: "After Effects, Blender, Procreate",
    category: "motion",
  },

  // experiments
  {
    type: "image",
    src: "/images/projects/namu.webp",
    alt: "Namu",
    tool: "Figma",
    link: "https://accurate-camera-fa3.notion.site/Namu-164d2970043580bea568dd6e3bcaef87?pvs=73",
    category: "experiments",
  },
  {
    type: "image",
    src: "/images/playground/experiments/tableclothShirt.webp",
    alt: "Tablecloth Shirt",
    tool: "Fabric",
    description: "Made out of a $5 tablecloth I found at Goodwill.",
    category: "experiments",
  },
  {
    type: "image",
    src: "/images/playground/experiments/spoonButler.webp",
    alt: "Spoon Butler",
    tool: "Metalwork, Fabric",
    description: "A little welded friend to hold your sponge.",
    category: "experiments",
  },
  {
    type: "image",
    src: "/images/playground/graphics/deck.webp",
    alt: "Low Resource Languages",
    tool: "Figma",
    category: "graphics",
  },
  {
    type: "image",
    src: "/images/playground/experiments/deskDumpster.webp",
    alt: "Desk Dumpster",
    tool: "Fusion, Acrylic",
    category: "experiments",
  },
  {
    type: "image",
    src: "/images/playground/experiments/lamp.webp",
    alt: "A Lamp",
    tool: "Woodworking",
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
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.category === filter);

  return (
    <main
      className="overflow-hidden"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
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
          className="container columns-2 sm:columns-4 gap-x-2 sm:gap-x-5 w-[400px] sm:w-[1200px]  opacity-0 animate-slidein [--slidein-delay:700ms]"
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
                        />
                      ) : (
                        <video
                          src={item.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full"
                        />
                      )}
                    </a>
                  ) : item.type === "image" ? (
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
                    />
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
                  <video
                    src={selectedItem.src}
                    controls
                    autoPlay
                    muted
                    className="max-h-[750px] w-auto object-contain rounded"
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
