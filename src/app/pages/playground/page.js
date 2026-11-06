"use client";

import Image from "next/image";
import { useState, useEffect, useMemo, useCallback } from "react";
import { createPortal } from "react-dom";
import { Lightbox } from "@/app/components/ProjectsGallery";
import { motion, AnimatePresence } from "framer-motion";
import "./playground.css";
import PlaygroundVideo from "@/app/components/PlaygroundVideo";
import { playgroundItems as items } from "./items";

const FILTERS = [
  ["all", "Everything (all @ once)"],
  ["graphics", "Graphics"],
  ["motion", "Motion / 3D"],
  ["illustration", "Illustration"],
  ["experiments", "Experiments"],
  ["murals", "Murals"],
];

const SIZES = "(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 50vw";

function useColumnCount() {
  const [cols, setCols] = useState(4);
  useEffect(() => {
    const calc = () =>
      setCols(window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 2);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return cols;
}

// Shortest-column-first placement using each item's known aspect ratio,
// so the layout is final on first paint and never reflows as media loads.
function toColumns(list, count) {
  const cols = Array.from({ length: count }, () => ({ h: 0, items: [] }));
  list.forEach((item, i) => {
    const target = cols.reduce((a, b) => (b.h < a.h ? b : a));
    target.items.push({ item, i });
    target.h += (item.height || 1) / (item.width || 1);
  });
  return cols.map((c) => c.items);
}

function Tile({ item, order, onHover, onSelect }) {
  const [ready, setReady] = useState(false);

  const media =
    item.type === "image" ? (
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        sizes={SIZES}
        loading={order < 8 ? "eager" : "lazy"}
        priority={order < 4}
        onLoad={() => setReady(true)}
        className={`w-full h-auto block transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      />
    ) : (
      <PlaygroundVideo
        src={item.src}
        width={item.width}
        height={item.height}
        eager={order < 6}
        onReady={() => setReady(true)}
        className={`w-full h-auto block transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      />
    );

  return (
    <motion.div
      className={`box relative group ${item.link ? "cursor-pointer" : "cursor-zoom-in"}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(order, 12) * 0.03, ease: "easeOut" }}
      onMouseEnter={() => onHover(item)}
      onMouseLeave={() => onHover(null)}
      onClick={() => {
        if (!item.link) onSelect(item);
      }}
    >
      {/* reserves the exact space before the media arrives */}
      <div
        className="relative overflow-hidden rounded-[15px] bg-neutral-200/50"
        style={{ aspectRatio: `${item.width} / ${item.height}` }}
      >
        {item.link && (
          <div className="absolute top-2 right-2 w-6 h-6 bg-white/80 backdrop-blur-md border border-gray-300 rounded-full flex items-center justify-center z-20 transition-transform duration-100 group-hover:scale-110 group-hover:bg-white/90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" className="w-4 h-4">
              <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
            </svg>
          </div>
        )}
        {item.link ? (
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {media}
          </a>
        ) : (
          media
        )}
      </div>
    </motion.div>
  );
}

export default function Playground() {
  const [filter, setFilter] = useState("all");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedIndex, setSelectedIndex] = useState(null);
  const colCount = useColumnCount();

  const filteredItems = useMemo(
    () => (filter === "all" ? items : items.filter((item) => [].concat(item.category).includes(filter))),
    [filter]
  );
  const columns = useMemo(() => toColumns(filteredItems, colCount), [filteredItems, colCount]);

  // only pieces without an outbound link open in the viewer
  const viewable = useMemo(() => filteredItems.filter((i) => !i.link), [filteredItems]);
  const lightboxProject = useMemo(
    () => ({
      title: "Playground",
      media: viewable.map((i) => i.src),
      titles: viewable.map((i) => i.alt),
    }),
    [viewable]
  );
  const close = useCallback(() => setSelectedIndex(null), []);
  const step = useCallback(
    (d) =>
      setSelectedIndex((i) =>
        i === null ? i : (i + d + viewable.length) % viewable.length
      ),
    [viewable.length]
  );
  const openItem = useCallback(
    (item) => {
      const i = viewable.indexOf(item);
      if (i >= 0) setSelectedIndex(i);
    },
    [viewable]
  );

  return (
    <main
      className="overflow-hidden"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      <div className="mx-5 sm:mx-20 flex flex-col sm:flex-row gap-12 mt-8">
        <div className="hidden sm:flex flex-col justify-start gap-4 mb-4 font-mono text-xs min-w-max items-start text-left opacity-0 animate-slidein [--slidein-delay:400ms]">
          <h1 className="font-franklin text-5xl">FILTER</h1>
          {FILTERS.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={filter === key ? "text-blue-500" : ""}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Gallery — keyed on filter so each filter fades in cleanly */}
        <div
          key={`${filter}-${colCount}`}
          className="pg-grid flex-1 min-w-0 max-w-[1200px] flex gap-2 sm:gap-5 items-start"
        >
          {columns.map((col, c) => (
            <div key={c} className="flex-1 min-w-0 flex flex-col">
              {col.map(({ item, i }) => (
                <Tile
                  key={item.src}
                  item={item}
                  order={i}
                  onHover={setHoveredItem}
                  onSelect={openItem}
                />
              ))}
            </div>
          ))}
        </div>

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
                pointerEvents: "none",
              }}
              className="hidden md:block bg-white/80 backdrop-blur-lg border border-gray-300 p-4 rounded shadow-xl max-w-60"
            >
              <div className="font-serif text-black leading-[16px] text-lg font-medium mb-1">
                {hoveredItem.alt}
              </div>
              <div className="font-mono text-gray-500 text-xs">
                {hoveredItem.tool}
              </div>
              {hoveredItem.description && (
                <div className="font-sans text-xs mt-2">{hoveredItem.description}</div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lightbox — same viewer as the home page projects */}
        {selectedIndex !== null &&
          createPortal(
            <Lightbox
              project={lightboxProject}
              index={selectedIndex}
              onClose={close}
              onStep={step}
            />,
            document.body
          )}
      </div>
    </main>
  );
}
