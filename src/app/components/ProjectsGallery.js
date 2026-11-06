"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Edit this list to curate what shows on the home page.
// Any src ending in .webm / .mp4 / .mov renders as a looping video.
export const projects = [
  {
    title: "Hardware Nation",
    tags: ["Brand", "Social"],
    description:
      "Created the full visual world for an editorial publication and media outlet bringing together leading hardware founders.",
    media: [
      "/images/projects/hwn/poster.webp",
      "/images/projects/hwn/teaser.mp4",
      "/images/projects/hwn/dinner.webp",
      "/images/projects/hwn/dinner-poster.webp",
      "/images/projects/hwn/ces-dinner.webp",
      "/images/projects/hwn/dinner-film.mp4",
      "/images/projects/hwn/site.mp4",
      "/images/projects/hwn/wellness.mp4",
      "/images/projects/hwn/brighter.mp4",
      "/images/projects/hwn/under250.webp",
      "/images/projects/hwn/hyperice.mp4",
      "/images/projects/hwn/tdih.webp",
    ],
  },
  {
    title: "LFO Labs",
    tags: ["Visual", "Motion", "Experiential"],
    description:
      "An experimental studio merging dance, design, and DJ performance, made with Eileen Mou.",
    link: "https://www.instagram.com/lfo.labs/",
    linkLabel: "Instagram ↗",
    media: [
      "/images/projects/lfo/listen.webp",
      "/images/projects/lfo/feel.webp",
      "/images/projects/lfo/observe.webp",
      "/images/projects/lfo/visuals1.mp4",
      "/images/projects/lfo/listen-feel-observe-1.webp",
      // "/images/projects/lfo/listen-feel-observe-2.webp",
      "/images/projects/lfo/dance.mp4",
      "/images/projects/lfo/cypher.mp4",
      "/images/projects/lfo/misc.mp4",
      "/images/projects/lfo/visuals2.mp4",
      "/images/playground/motion/lfofinalsticker.webm",
      "/images/projects/lfo/visuals3.mp4",
      "/images/projects/lfo/event.mp4",
    ],
  },
  {
    title: "Wabi",
    tags: ["Brand", "Social", "Experiential"],
    description:
      "Led art direction, copy, and design for Wabi's social and experiential campaigns.",
    link: "https://www.instagram.com/wabimaxxing/",
    linkLabel: "Instagram ↗",
    media: [
      "/images/projects/wabi/Welcome.webp",
      "/images/projects/wabi/WhatIf1.webp",
      "/images/projects/wabi/NewSkool.webp",
      // "/images/projects/wabi/Card.webp",
      "/images/projects/wabi/Wingman.webp",
      "/images/projects/wabi/Prompt.webp",
      // "/images/projects/wabi/Prompt2.webp",
      // "/images/projects/wabi/VibeCoding1.webp",
      "/images/projects/wabi/WhatIf2.webp",
      "/images/projects/wabi/SoWhat.webp",
      "/images/projects/wabi/WhatIf6.webp",
      "/images/projects/wabi/Clav.webp",
      "/images/projects/wabi/Wabimaxxing.webp",
      "/images/projects/wabi/TryFin.webp",
      "/images/projects/wabi/Jake1.webp",
      "/images/projects/wabi/Janina.webp",
      "/images/projects/wabi/TryJanina.webp",
      "/images/projects/wabi/SpringClean.webp",
    ],
  },
  {
    title: "Whim",
    tags: ["Brand", "Web"],
    description:
      "Site design and brand direction for a Series B company powering hardware rentals for leading brands like Tonal, Insta360, and KEH.",
    link: "https://www.whim.com",
    linkLabel: "Site ↗",
    media: [
      "/images/projects/whim/logo-v2.mp4",
      "/images/projects/whim/home-hero.webp",
      "/images/projects/whim/site-design.webp",
      "/images/projects/whim/try-it.webp",
      "/images/projects/whim/try-on-whim.webp",
    ],
  },
  {
    title: "Deeplocal",
    tags: ["Experiential", "Motion", "UI/UX"],
    description: [
      "Designed creative tech for Google, Netflix, and Microsoft brand activations.",
      "(NDA)",
    ],
    media: [
      // "/images/projects/DL.webm", (skull animation, hidden)
      "/images/projects/deeplocal/pixelroom-render.mp4",
      "/images/projects/deeplocal/pixelroom-sketches.webp",
      "/images/projects/deeplocal/pixelroom-print.webp",
      // "/images/projects/deeplocal.webp",
      "/images/projects/netflix.webp",
      "/images/projects/ec1.webp",
      // "/images/projects/cloud.webp",
      // "/images/projects/pixelroom.webp",
      // "/images/projects/pixelroomUI.webp",
    ],
  },
  {
    title: "Scrap Studio",
    description:
      "Personal freelance and music tech work.",
    media: [
      "/images/projects/scrap/reve-toys.mp4",
      "/images/playground/graphics/jazzfest.webp",
      "/images/playground/graphics/dublab.webp",
      "/images/playground/graphics/dublab_new.webp",
    ],
  },
  {
    title: "The StoryGraph",
    tags: ["Product", "UI/UX"],
    description:
      "Revamped a reading platform for 4 million users as its sole product designer. Winner of a 2025 App Store Award.",
    link: "https://www.apple.com/lu/newsroom/2025/12/apple-unveils-the-winners-of-the-2025-app-store-awards/",
    linkLabel: "App Store Award ↗",
    media: [
      "/images/projects/storygraph/revampfull.webp",
      "/images/projects/storygraph/concept.webm",
      // process steps, hidden from home:
      // "/images/projects/storygraph/1.webp",
      // "/images/projects/storygraph/2.webp",
      // "/images/projects/storygraph/3.webp",
      // "/images/projects/storygraph/4.webp",
      "/images/projects/storygraph/designsystem.webp",
    ],
  },
  {
    title: '"Fathead" White Paper',
    tags: ["Graphic", "Editorial"],
    description:
      "Designed the full book and visual identity for a Cannes award-winning film.",
    media: [
      "/images/projects/fatheadkid.webp",
      "/images/projects/fathead/magazines.webp",
      "/images/projects/fathead/magazines2.webp",
      "/images/projects/fathead/craig.webp",
      "/images/playground/graphics/fathead1.webp",
      "/images/playground/graphics/fathead2.webp",
      "/images/playground/graphics/fathead3.webp",
      "/images/playground/graphics/fathead4.webp",
      "/images/playground/graphics/fathead6.webp",
    ],
  },
  {
    title: "Lumen",
    tags: ["Product", "Motion"],
    description:
      "Built a feedback tool in an 8-week incubator, from product and brand to motion and pitch decks.",
    media: [
      "/images/projects/lumen.webm",
      "/images/projects/lumen/highlight.webm",
      "/images/projects/lumen/spotlight.webm",
      "/images/projects/lumen/miss.webm",
    ],
  },
];

const isVideo = (src) => /\.(webm|mp4|mov)$/i.test(src);

function Media({ src, className, onClick, alt, onLoad }) {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        className={className}
        onClick={onClick}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedMetadata={onLoad}
      />
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onClick={onClick}
      onLoad={onLoad}
    />
  );
}

export function Lightbox({ project, index, onClose, onStep }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onStep]);

  const src = project.media[index];
  const many = project.media.length > 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f7f7f7]/90 backdrop-blur-md animate-fadein cursor-zoom-out"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} media`}
    >
      <Media
        key={src}
        src={src}
        alt={project.title}
        className="max-h-[86vh] max-w-[90vw] object-contain shadow-xl cursor-default"
        onClick={(e) => e.stopPropagation()}
      />

      <div className="absolute top-5 left-6 right-6 flex justify-between font-mono text-xs text-neutral-500 pointer-events-none">
        <span>{project.titles?.[index] ?? project.title}</span>
        <span>
          {index + 1} / {project.media.length}
        </span>
      </div>

      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-xs text-neutral-500 hover:text-black"
      >
        Close (esc)
      </button>

      {many && (
        <>
          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              onStep(-1);
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 font-mono text-lg text-neutral-500 hover:text-black"
          >
            ←
          </button>
          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              onStep(1);
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 font-mono text-lg text-neutral-500 hover:text-black"
          >
            →
          </button>
        </>
      )}
    </div>
  );
}

// Must match the page grid in globals.css (crosshairs every 200px,
// vertical ones at 50% + n*200px, horizontal ones at n*200px from page top).
const GRID = 200; // section top lands on a crosshair row

// One project's media: collapsed shows just the first row of images (full size);
// expanding grows the box to reveal the remaining rows.
// Justified rows: every row fills the column width at (up to) a target height,
// so wide and tall pieces pack together instead of each taking its own line.
function targetRowHeight(w) {
  if (w >= 1280) return 270;
  if (w >= 1024) return 240;
  if (w >= 640) return 180;
  return 140;
}

function layoutRows(aspects, width, target, gap) {
  const rows = [];
  let cur = [];
  let sum = 0;
  aspects.forEach((a, i) => {
    cur.push(i);
    sum += a;
    const gaps = gap * (cur.length - 1);
    if (sum * target + gaps >= width) {
      rows.push({ items: cur, h: (width - gaps) / sum, full: true });
      cur = [];
      sum = 0;
    }
  });
  if (cur.length) rows.push({ items: cur, h: target, full: false });
  return rows;
}

// how many rows of images a closed project shows
const COLLAPSED_ROWS = 2;

function MediaRows({ project, p, isOpen, onOpen, onMeasure }) {
  const wrapRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [vw, setVw] = useState(1440);
  const [aspects, setAspects] = useState(() => project.media.map(() => 1));

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const calc = () => {
      setWidth(el.clientWidth);
      setVw(window.innerWidth);
    };
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const setAspect = (i) => (e) => {
    const t = e.currentTarget;
    const w = t.videoWidth || t.naturalWidth;
    const h = t.videoHeight || t.naturalHeight;
    if (!w || !h) return;
    setAspects((prev) => {
      if (Math.abs(prev[i] - w / h) < 0.001) return prev;
      const next = prev.slice();
      next[i] = w / h;
      return next;
    });
  };

  const gap = vw >= 1024 ? 16 : 12;
  const rows = width ? layoutRows(aspects, width, targetRowHeight(vw), gap) : [];
  const shown = rows.slice(0, COLLAPSED_ROWS);
  const firstH = shown.length
    ? Math.round(shown.reduce((t, r) => t + r.h, 0) + gap * (shown.length - 1))
    : 0;
  const fullH = rows.length
    ? Math.round(rows.reduce((t, r) => t + r.h, 0) + gap * (rows.length - 1))
    : 0;

  useEffect(() => {
    if (rows.length) onMeasure(p, rows.length > COLLAPSED_ROWS);
  }, [rows.length, p, onMeasure]);

  const height = rows.length ? (isOpen ? fullH : firstH) : undefined;

  return (
    <div
      ref={wrapRef}
      className="overflow-hidden min-w-0 transition-[height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{ height }}
    >
      <div className="flex flex-col" style={{ gap }}>
        {rows.map((row, r) => (
          <div
            key={r}
            className={`flex ${row.full ? "" : "lg:justify-end"}`}
            style={{ gap }}
          >
            {row.items.map((i) => {
              const src = project.media[i];
              return (
                <button
                  key={src}
                  onClick={() => onOpen({ p, i })}
                  className="block shrink-0 cursor-zoom-in overflow-hidden bg-neutral-200/40"
                  style={{ width: aspects[i] * row.h, height: row.h }}
                  aria-label={`View ${project.title} image ${i + 1}`}
                >
                  <Media
                    src={src}
                    alt={`${project.title} ${i + 1}`}
                    onLoad={setAspect(i)}
                    className="block w-full h-full object-cover transition-opacity duration-300 hover:opacity-85"
                  />
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsGallery() {
  const [open, setOpen] = useState(null); // lightbox { p, i }
  const [expanded, setExpanded] = useState({}); // collapsed by default (shows COLLAPSED_ROWS rows)
  const [hasMore, setHasMore] = useState({});
  const spacerRef = useRef(null);

  const toggle = (p) => setExpanded((c) => ({ ...c, [p]: !c[p] }));
  const onMeasure = useCallback(
    (p, more) => setHasMore((m) => (m[p] === more ? m : { ...m, [p]: more })),
    []
  );
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d) =>
      setOpen((o) => {
        if (!o) return o;
        const n = projects[o.p].media.length;
        return { p: o.p, i: (o.i + d + n) % n };
      }),
    []
  );

  // Shift the page grid so a crosshair row lands exactly on the section's first line.
  const measure = useCallback(() => {
    const el = spacerRef.current;
    if (!el) return;
    let top = 0; // offsetTop chain ignores the intro slide-in transform
    for (let n = el; n; n = n.offsetParent) top += n.offsetTop;
    document.body.style.setProperty("--grid-y", `${Math.round(top) % GRID}px`);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    const t = setTimeout(measure, 1800);
    document.fonts?.ready.then(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
      ro.disconnect();
      document.body.style.removeProperty("--grid-y");
    };
  }, [measure]);

  return (
    <>
      <div ref={spacerRef} aria-hidden />
      {/* side padding: a little wider than the nav */}
      <section className="w-full px-8 lg:px-12 text-left text-neutral-800">
        {projects.map((project, p) => {
          const isOpen = !!expanded[p];
          const canToggle = hasMore[p] !== false;
          return (
            <div key={project.title} className="border-t border-neutral-300">
              <div className="pt-[30px] pb-[40px] grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)] gap-y-5">
                <div className="flex justify-between items-start gap-4 lg:pr-6">
                  <div>
                    <h2 className="font-serif text-[1.65rem] leading-[1.15]">
                      {project.title}
                    </h2>
                    {project.tags && (
                      <p className="font-mono text-[0.72rem] leading-none text-blue-600 mt-3">
                        {project.tags.join(", ")}
                      </p>
                    )}
                    {[].concat(project.description).map((d, k) => (
                      <p
                        key={k}
                        className="font-mono text-xs leading-[1.15rem] text-neutral-600 mt-3 max-w-[22rem]"
                      >
                        {d}
                      </p>
                    ))}
                    {project.link && (
                      <Link
                        href={project.link}
                        {...(project.link.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="inline-block font-mono text-[0.65rem] text-neutral-400 hover:text-black mt-3"
                      >
                        {project.linkLabel || "Case study ↗"}
                      </Link>
                    )}
                  </div>
                  {canToggle && (
                    <button
                      onClick={() => toggle(p)}
                      aria-expanded={isOpen}
                      aria-label={`${isOpen ? "Minimize" : "Expand"} ${project.title}`}
                      className="w-6 h-6 flex items-center justify-center text-2xl leading-none font-light text-neutral-700 hover:text-black shrink-0"
                    >
                      <span
                        className={`block transition-transform duration-300 ease-out ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        +
                      </span>
                    </button>
                  )}
                </div>

                <MediaRows
                  project={project}
                  p={p}
                  isOpen={isOpen}
                  onOpen={setOpen}
                  onMeasure={onMeasure}
                />
                {isOpen && canToggle && (
                  <button
                    onClick={() => toggle(p)}
                    className="lg:col-start-1 justify-self-start font-mono text-[0.65rem] text-neutral-400 hover:text-black transition-colors"
                  >
                    Minimize
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <div className="border-t border-neutral-300" />

        {open &&
          createPortal(
            <Lightbox
              project={projects[open.p]}
              index={open.i}
              onClose={close}
              onStep={step}
            />,
            document.body
          )}
      </section>
    </>
  );
}
