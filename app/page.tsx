"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ValentineCard from "@/components/ValentineCard";
import YesScreen from "@/components/YesScreen";

export default function Home() {
  const [success, setSuccess] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {!success ? (
          <ValentineCard key="ask" onYes={() => setSuccess(true)} />
        ) : (
          <YesScreen key="success" />
        )}
      </AnimatePresence>
    </main>
  );
}