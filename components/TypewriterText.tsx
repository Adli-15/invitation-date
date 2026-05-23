"use client";

import { useState, useEffect } from "react";

export default function TypewriterText({
  text,
  speed = 25,
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <p className={`whitespace-pre-line ${className}`}>
      {displayed}
      {/* Blinking cursor */}
      {displayed.length < text.length && (
        <span className="animate-pulse text-romantic-400">|</span>
      )}
    </p>
  );
}