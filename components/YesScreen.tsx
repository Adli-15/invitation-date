"use client";

import TypewriterText from "./TypewriterText";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------- Page 1: Thank You ---------- */
function ThankYouPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-lg mx-auto px-4"
    >
      <h1 className="text-3xl font-bold text-center text-romantic-600 dark:text-romantic-300 mb-4">
        Thank you for saying YES ❤️
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        Here are some of our favourite pictures
      </p>

      {/* Static image gallery – replace images in /public/images/ */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {[1, 2, 3].map((num) => (
          <img
            key={num}
            src={`/images/thankyou${num}.jpeg`}
            alt={`Memory ${num}`}
            className="w-28 h-28 object-cover rounded-2xl shadow-lg"
          />
        ))}
      </div>

      {/* Typewriter romantic message */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-romantic-200 dark:border-gray-600 rounded-2xl p-5 shadow-lg">
        <TypewriterText
          text="I’m really glad you said yes.\n\n

I don’t want this to feel like just another plan or a normal outing. I want it to be something gentle and meaningful — where we can just be ourselves, talk without rushing, laugh without thinking, and enjoy the kind of quiet moments that feel special without trying too hard.\n\n

I’ve been looking forward to this more than I probably should admit. Not because of where we’re going, but because of who I’m going with.\n\n

Let’s make it simple, comfortable, and real. Just you, me, and a moment that feels a little different from everything else.\n\n

I’ll see you soon ❤️\n"
          speed={25}
          className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed"
        />
      </div>
    </motion.div>
  );
}

/* ---------- Page 2: Dress Code ---------- */
function DressCodePage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-lg mx-auto px-4"
    >
      <h1 className="text-3xl font-bold text-center text-romantic-600 dark:text-romantic-300 mb-4">
        Dress Code ✨
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        A little inspiration for our look
      </p>

      {/* Static outfit image */}
      <div className="flex justify-center mb-6">
        <img
          src="/images/outfit.jpeg"
          alt="Outfit reference"
          className="w-40 h-40 object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* Typewriter description */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-romantic-200 dark:border-gray-600 rounded-2xl p-5 shadow-lg">
        <TypewriterText
          text="Think elegant black — maybe a cute black dress, something classy, soft, or simply your style. But most importantly, just be comfortable and be yourself… because you already look perfect to me.🌸"
          speed={20}
          className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed"
        />
      </div>
    </motion.div>
  );
}

/* ---------- Page 3: Plan of the Day ---------- */
function PlanOfTheDayPage() {
  const activities = [
    { time: "12:00 PM", activity: "🎁 Surprise Appointment — a little unexpected moment just for Faleesha ✨" },
    { time: "1:30 PM", activity: "🍽️ Lunch at NakNak FNB — good food, better company 🤍" },
    { time: "2:00 PM", activity: "🛍️ Window Shopping — strolling through the mall, just enjoying the vibes together" },
    { time: "3:30 PM", activity: "🎳 Bowling Alley — a bit of friendly competition, a lot of laughter 😄" },
    { time: "4:30 PM", activity: "🕹️ Fun Scape Arcade — play, win, and act like kids again 🎮" },
    { time: "5:00 PM", activity: "🍦 Inside Scoop — sweet dessert break to recharge the mood" },
    { time: "6:30 PM", activity: "📸 Photobooth — capturing cute memories together, one frame at a time 🕯️" },
    { time: "7:00 PM", activity: "🎤 Karaoke — sing your heart out, no judgment, just fun vibes ✨" },
    { time: "10:30 PM", activity: "🌙 End of the Day — a slow goodbye with full hearts and tired smiles 🤍" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-lg mx-auto px-4"
    >
      <h1 className="text-3xl font-bold text-center text-romantic-600 dark:text-romantic-300 mb-8">
        What are we gonna do for the day? 💭
      </h1>

      <div className="space-y-4">
        {activities.map((item, i) => (
          <div
            key={i}
            className="flex gap-4 items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-romantic-100 dark:border-gray-700"
          >
            <div className="bg-romantic-400 text-white font-bold rounded-xl px-3 py-2 text-sm whitespace-nowrap shadow">
              {item.time}
            </div>
            <div className="text-gray-700 dark:text-gray-200 font-medium">
              {item.activity}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ---------- Main 3‑page container with navigation ---------- */
export default function YesScreen() {
  const [page, setPage] = useState(0);
  const pages = [
    <ThankYouPage key="thankyou" />,
    <DressCodePage key="dresscode" />,
    <PlanOfTheDayPage key="plan" />,
  ];

  const goNext = () => setPage((p) => Math.min(p + 1, pages.length - 1));
  const goPrev = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <div className="w-full flex flex-col items-center justify-center pb-20">
      <AnimatePresence mode="wait">{pages[page]}</AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex justify-between w-full max-w-lg mt-10 px-4 gap-4">
        <button
          onClick={goPrev}
          disabled={page === 0}
          className="px-6 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg disabled:opacity-30 text-romantic-600 dark:text-romantic-300 font-semibold transition-all hover:scale-105"
        >
          ← Previous
        </button>
        <button
          onClick={goNext}
          disabled={page === pages.length - 1}
          className="px-6 py-3 bg-gradient-to-r from-romantic-400 to-romantic-500 text-white font-semibold rounded-2xl shadow-lg disabled:opacity-30 transition-all hover:scale-105"
        >
          Next →
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2 mt-4">
        {pages.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === page ? "bg-romantic-500" : "bg-romantic-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}