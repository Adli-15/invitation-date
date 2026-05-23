"use client";

import { motion } from "framer-motion";

export default function YesScreen() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
      className="w-full max-w-md text-center"
    >
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-white/40 dark:border-gray-700/40">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-6xl mb-6"
        >
          🥳💖
        </motion.div>
        <h1 className="text-3xl font-bold text-romantic-600 dark:text-romantic-300 mb-4">
          Yay! I knew you’d say yes!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          I’ll pick you up at 7 ❤️<br />
          (This is the start of something beautiful)
        </p>
        <motion.div
          className="mt-8 text-4xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          💑
        </motion.div>
      </div>
    </motion.div>
  );
}