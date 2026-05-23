"use client";

import { useMusic } from "@/hooks/useMusic";

export default function MusicToggle() {
  const { playing, toggle } = useMusic();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg hover:scale-110 transition-transform"
      aria-label={playing ? "Mute music" : "Play music"}
    >
      {playing ? "🔊" : "🔇"}
    </button>
  );
}