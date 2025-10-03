"use client";
import { useEffect, useRef } from "react";
import { useAudio } from "./AudioContext";

export default function AudioPlayer() {
  const { currentSongIndex, allSongs, status } = useAudio();
  const audioRef = useRef(null);
  const playing = status === "playing";

  useEffect(() => {
    if (audioRef.current) {
      playing ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [playing, currentSongIndex]);

  // This is now the only audio element in your entire app
  return <audio ref={audioRef} src={allSongs[currentSongIndex]?.audio} loop />;
}
