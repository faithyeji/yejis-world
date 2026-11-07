"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { allSongs } from "./AudioContext";

const LoadingContext = createContext();

// Only the CD (song) art is needed before reveal. Playground media now
// reserves its own space (known dimensions) and lazy-loads, so it no longer
// blocks — or double-downloads on — every page load.
const criticalImageUrls = Array.from(
  new Set(["/YejiNames2-poster.webp", ...allSongs.map((song) => song.image)])
);

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let isCancelled = false;
    const MIN_LOADING_TIME = 800; // minimum spinner time
    const FADE_DELAY = 500; // time for overlay fade-out
    const MAX_WAIT_TIME = 8000; // safety cap so we never block forever

    const preloadImages = () =>
      Promise.all(
        criticalImageUrls.map(
          (src) =>
            new Promise((resolve) => {
              const img = new window.Image();
              img.onload = () => resolve(null);
              img.onerror = () => resolve(null);
              img.src = src;
            })
        )
      );

    const minTimePromise = new Promise((resolve) =>
      setTimeout(resolve, MIN_LOADING_TIME)
    );

    const maxWaitPromise = new Promise((resolve) =>
      setTimeout(resolve, MAX_WAIT_TIME)
    );

    Promise.race([
      Promise.all([preloadImages(), minTimePromise]),
      maxWaitPromise,
    ]).then(() => {
      if (isCancelled) return;

      setIsLoading(false);

      setTimeout(() => {
        if (isCancelled) return;
        setIsLoaded(true);
        document.body.classList.add("content-loaded");
        // Force a reflow to restart animations
        void document.body.offsetHeight;
      }, FADE_DELAY);
    });

    return () => {
      isCancelled = true;
      document.body.classList.remove("content-loaded");
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, isLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
}
