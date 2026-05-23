"use client";

import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";

export default function IntroPage({ onFinish }: { onFinish: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-[80vh] px-6 text-center"
    >
      {/* Floating hearts inside this screen (reuse from layout, but we already have background hearts) */}

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mb-8"
      >
        <span className="text-5xl">💌</span>
      </motion.div>

      <h1 className="text-3xl font-bold text-romantic-600 dark:text-romantic-300 mb-4">
        For Someone Special
      </h1>

      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-romantic-200 dark:border-gray-600 w-full">
        <TypewriterText
          text={`Hey,

I’ve been thinking… and I’d really like to take you out properly, just the two of us, away from all the noise and distractions.

Not just as a casual plan, but as a moment I’ll remember — getting to know you better, talking a little longer, laughing a little more, and seeing where the night naturally takes us.

So this is me asking you: would you like to go on a date with me?

Nothing fancy if you don’t want it to be. Just something simple, warm, and honest — like good food, slow conversations, and a bit of time that feels like it’s just ours.

If you say yes, I’ll make sure it’s worth your time.`}
          speed={25}
          className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed"
        />
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        onClick={onFinish}
        className="mt-8 px-8 py-3 bg-gradient-to-r from-romantic-400 to-romantic-500 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all"
      >
        Open the question 💌
      </motion.button>
    </motion.div>
  );
}