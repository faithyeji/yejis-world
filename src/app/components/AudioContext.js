import { createContext, useState, useContext, useEffect } from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
  // State for audio playback (status and song index)
  const [status, setStatus] = useState(() => {
    const savedStatus = localStorage.getItem("audioStatus");
    return savedStatus || "paused";
  });
  const [currentSongIndex, setCurrentSongIndex] = useState(() => {
    const savedIndex = localStorage.getItem("currentSongIndex");
    return savedIndex ? parseInt(savedIndex, 10) : 0;
  });

  // localStorage persistence (changes)
  useEffect(() => {
    localStorage.setItem("audioStatus", status);
    localStorage.setItem("currentSongIndex", currentSongIndex);
  }, [status, currentSongIndex]);

  return (
    <AudioContext.Provider
      value={{ status, setStatus, currentSongIndex, setCurrentSongIndex }}
    >
      {children}
    </AudioContext.Provider>
  );
}

// custom hook
export function useAudio() {
  return useContext(AudioContext);
}
