"use client";

import { useEffect, useRef, useState } from "react";

const melody = [
  { freq: 523.25, dur: 0.2 }, // C5
  { freq: 659.25, dur: 0.2 }, // E5
  { freq: 783.99, dur: 0.4 }, // G5
  { freq: 659.25, dur: 0.2 },
  { freq: 523.25, dur: 0.2 },
  { freq: 392.00, dur: 0.4 }, // G4
  { freq: 523.25, dur: 0.6 },
];

export function useMusic() {
  const [playing, setPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);   // ← FIXED

  const playMelody = () => {
    const ctx = audioCtxRef.current;
    const gain = gainNodeRef.current;
    if (!ctx || !gain) return;
    let time = ctx.currentTime;
    melody.forEach(({ freq, dur }) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, time);
      const noteGain = ctx.createGain();
      noteGain.gain.setValueAtTime(0.3, time);
      noteGain.gain.exponentialRampToValueAtTime(0.001, time + dur);
      osc.connect(noteGain).connect(gain);
      osc.start(time);
      osc.stop(time + dur);
      time += dur + 0.05;
    });
  };

  useEffect(() => {
    if (playing) {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
        gainNodeRef.current = audioCtxRef.current.createGain();
        gainNodeRef.current.gain.value = 0.5;
        gainNodeRef.current.connect(audioCtxRef.current.destination);
      }
      playMelody();
      intervalRef.current = setInterval(playMelody, 2000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [playing]);

  const toggle = () => {
    if (audioCtxRef.current?.state === "suspended") {
      audioCtxRef.current.resume();
    }
    setPlaying((p) => !p);
  };

  return { playing, toggle };
}