"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------- Reusable image upload component ---------- */
function ImageUpload({
  onImageChange,
}: {
  onImageChange: (dataUrl: string) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      onImageChange(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        onClick={() => fileInputRef.current?.click()}
        className="w-28 h-28 rounded-2xl border-2 border-dashed border-romantic-300 flex items-center justify-center cursor-pointer hover:bg-romantic-50 transition-colors"
      >
        <span className="text-3xl text-romantic-400">📷</span>
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFile}
        className="hidden"
      />
      <p className="text-xs mt-1 text-gray-500">Tap to upload</p>
    </div>
  );
}

/* ---------- Page 1: Thank You ---------- */
function ThankYouPage() {
  const [images, setImages] = useState<string[]>([]);
  const [text, setText] = useState(
    "I still can’t believe you said yes. Here are some of my favourite moments that remind me of you... 💕"
  );

  const handleImageUpload = (index: number, dataUrl: string) => {
    const updated = [...images];
    updated[index] = dataUrl;
    setImages(updated);
  };

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

      {/* 3 image upload slots */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {[0, 1, 2].map((idx) => (
          <div key={idx} className="flex flex-col items-center">
            {images[idx] ? (
              <img
                src={images[idx]}
                alt={`Upload ${idx + 1}`}
                className="w-28 h-28 object-cover rounded-2xl shadow-lg"
              />
            ) : (
              <ImageUpload onImageChange={(url) => handleImageUpload(idx, url)} />
            )}
          </div>
        ))}
      </div>

      {/* Editable text area */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-romantic-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-romantic-400"
        rows={5}
      />
    </motion.div>
  );
}

/* ---------- Page 2: Dress Code ---------- */
function DressCodePage() {
  const [dressImage, setDressImage] = useState<string | null>(null);
  const [description, setDescription] = useState(
    "Wear something pink or floral! Soft pastels, cute dress or shirt. Be yourself but extra romantic. 🌸"
  );

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

      {/* Outfit image upload */}
      <div className="flex justify-center mb-6">
        {dressImage ? (
          <img
            src={dressImage}
            alt="Outfit reference"
            className="w-40 h-40 object-cover rounded-3xl shadow-lg"
          />
        ) : (
          <ImageUpload onImageChange={(url) => setDressImage(url)} />
        )}
      </div>

      {/* Description */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-romantic-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-romantic-400"
        rows={4}
      />
    </motion.div>
  );
}

/* ---------- Page 3: Plan of the Day ---------- */
function PlanOfTheDayPage() {
  const activities = [
    { time: "10:00 AM", activity: "Breakfast at the cute café" },
    { time: "12:00 PM", activity: "Picnic in the park" },
    { time: "3:00 PM", activity: "Watch the sunset together" },
    { time: "7:00 PM", activity: "Dinner with fairy lights" },
    { time: "9:00 PM", activity: "Stargazing & slow dancing" },
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

      {/* Timeline cards */}
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

      <p className="text-center text-xs text-gray-400 mt-6">
        * You can edit the timeline directly in the code
      </p>
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
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center pb-20">
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

      {/* Page indicator dots */}
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