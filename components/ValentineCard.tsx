"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import confetti from "canvas-confetti";
import { playPop, playSuccessJingle } from "@/hooks/useSound";

const rejectionMessages = [
  "Pwease? 🥺",
  "Are you sure?",
  "Think again!",
  "My heart is breaking 💔",
  "Don't do this to me!",
  "I'll cry... 😢",
  "You're making the cat sad 😿",
  "But... but... I have cookies! 🍪",
  "I'll tell my mom!",
  "Last chance...",
];

export default function ValentineCard({ onYes }: { onYes: () => void }) {
  const [noCount, setNoCount] = useState(0);
  const [messageIndex, setMessageIndex] = useState(-1);
  const [imageSrc, setImageSrc] = useState("https://cataas.com/cat/gif");
  const [showCryingCat, setShowCryingCat] = useState(false);
  const cardControls = useAnimation();

  // Yes grows bigger, No shrinks
  const yesScale = 1 + noCount * 0.15;
  const noScale = Math.max(0.5, 1 - noCount * 0.08);
  const noPosition = () => ({
    x: (Math.random() - 0.5) * 200,
    y: (Math.random() - 0.5) * 100,
  });
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setImageSrc("https://cataas.com/cat/gif?t=" + Date.now());
  }, []);

  const handleNo = () => {
    playPop();
    const newCount = noCount + 1;
    setNoCount(newCount);
    setMessageIndex(newCount % rejectionMessages.length);
    setNoOffset(noPosition());

    if (newCount >= 4) {
      setShowCryingCat(true);
      setImageSrc("https://cataas.com/cat/sad?t=" + Date.now());
      cardControls.start({
        x: [0, -8, 8, -8, 8, 0],
        transition: { duration: 0.4 },
      });
    }
  };

  const handleYes = () => {
    playSuccessJingle();
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      shapes: [
        confetti.shapeFromText({ text: "❤️", scalar: 3 }),
        confetti.shapeFromText({ text: "💕", scalar: 3 }),
        confetti.shapeFromText({ text: "💖", scalar: 3 }),
      ],
      scalar: 1.2,
    });
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
        shapes: ["circle", "star"],
        colors: ["#ff99cc", "#ff66b2", "#ff3385"],
      });
    }, 200);
    onYes();
  };

  return (
    <motion.div
      initial={{ scale: 0, rotate: -5 }}
      animate={{ scale: 1, rotate: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="w-full max-w-md"
    >
      <motion.div
        animate={cardControls}
        className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl shadow-romantic-200/50 dark:shadow-romantic-900/30 p-8 border border-white/40 dark:border-gray-700/40"
      >
        {/* Cat GIF */}
        <motion.div
          className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg"
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img
            src={imageSrc}
            alt="Cute cat"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://placekitten.com/200/200";
            }}
          />
        </motion.div>

        {/* Dynamic question / message */}
        <motion.h1
          key={messageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-center text-romantic-600 dark:text-romantic-300 mb-8"
        >
          {messageIndex === -1
            ? "Will you go out with me? 💌"
            : rejectionMessages[messageIndex]}
        </motion.h1>

        {/* Buttons */}
        <div className="relative flex justify-center gap-6 h-20">
          {/* Yes button – grows */}
          <motion.button
            onClick={handleYes}
            animate={{ scale: yesScale }}
            whileHover={{ scale: yesScale * 1.1 }}
            whileTap={{ scale: yesScale * 0.9 }}
            className="z-10 px-10 py-4 bg-gradient-to-r from-romantic-400 to-romantic-500 hover:from-romantic-500 hover:to-romantic-600 text-white font-bold text-xl rounded-2xl shadow-lg shadow-romantic-400/30 transition-colors"
          >
            Yes
          </motion.button>

          {/* No button – shrinks and moves */}
          <motion.button
            onClick={handleNo}
            animate={{
              x: noOffset.x,
              y: noOffset.y,
              scale: noScale,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            whileHover={{ scale: noScale * 1.05 }}
            whileTap={{ scale: noScale * 0.9 }}
            className="absolute px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold rounded-2xl shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            style={{ left: "calc(50% + 1rem)" }}
          >
            No
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}