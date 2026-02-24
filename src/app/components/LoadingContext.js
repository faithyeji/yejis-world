"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Add class to body to trigger animations after overlay fades
      setTimeout(() => {
        setIsLoaded(true);
        document.body.classList.add("content-loaded");
        // Force a reflow to restart animations
        void document.body.offsetHeight;
      }, 500);
    }, 800); // Show loading for at least 800ms

    return () => {
      clearTimeout(timer);
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
