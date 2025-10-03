"use client";
import { createContext, useState, useContext, useEffect } from "react";
const AudioContext = createContext();

export function AudioProvider({ children }) {
  const allSongs = [
    {
      image: "/images/songs/nujabes.webp",
      name: "BEAT LAMENTS THE WORLD",
      alt: "Nujabes",
      audio: "audios/Beats Lament the World.mp3",
    },
    {
      image: "/images/songs/jai.webp",
      name: "CRUSH (UNFINISHED)",
      alt: "Crush",
      audio: "audios/Crush.mp3",
    },
    {
      image: "/images/songs/kryptogram.webp",
      name: "HOW LONG HAVE YOU BEEN AWAY",
      alt: "How Long",
      audio: "audios/How Long Have You Been Away.mp3",
    },
    {
      image: "/images/songs/starry-night.webp",
      name: "STARRY NIGHT",
      alt: "Starry Night",
      audio: "audios/Starry Night.mp3",
    },
    {
      image: "/images/songs/track-uno.webp",
      name: "TRACK UNO",
      alt: "Track Uno",
      audio: "audios/TRACK UNO.mp3",
    },
    {
      image: "/images/songs/MFDOOM.webp",
      name: "LAVENDER BUDS",
      alt: "Lavender Buds",
      audio: "audios/Lavender Buds.mp3",
    },
    // {
    //   image: "/images/songs/jungle.webp",
    //   name: "LET'S GO BACK",
    //   alt: "Let's Go Back",
    //   audio: "audios/Let's Go Back.mp3",
    // },
    // {
    //   image: "/images/songs/gypsy.webp",
    //   name: "GYPSY",
    //   alt: "Gypsy",
    //   audio: "audios/Gypsy.mp3",
    // },
    // {
    //   image: "/images/songs/butterflies.webp",
    //   name: "BUTTERFLIES",
    //   alt: "Butterflies",
    //   audio: "audios/Butterflies.mp3",
    // },
  ];

  // State for audio playback (status and song index)
  // start with paused because browsers prevent autoplay lollll
  const [status, setStatus] = useState("paused");
  const [isClient, setIsClient] = useState(false);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedIndex = localStorage.getItem("currentSongIndex");
      if (savedIndex) {
        setCurrentSongIndex(parseInt(savedIndex, 10));
      } else {
        setCurrentSongIndex(0);
      }
    }
  }, []);

  // localStorage persistence (changes)
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("audioStatus", status);
      localStorage.setItem("currentSongIndex", currentSongIndex);
    }
  }, [status, currentSongIndex, isClient]);

  return (
    <AudioContext.Provider
      value={{
        status,
        setStatus,
        currentSongIndex,
        setCurrentSongIndex,
        allSongs,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

// custom hook
export function useAudio() {
  return useContext(AudioContext);
}
