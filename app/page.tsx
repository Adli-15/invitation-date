"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroPage from "@/components/IntroPage";
import ValentineCard from "@/components/ValentineCard";
import YesScreen from "@/components/YesScreen";

export default function Home() {
  const [stage, setStage] = useState<"intro" | "ask" | "success">("intro");

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {stage === "intro" && (
          <IntroPage key="intro" onFinish={() => setStage("ask")} />
        )}
        {stage === "ask" && (
          <ValentineCard key="ask" onYes={() => setStage("success")} />
        )}
        {stage === "success" && <YesScreen key="success" />}
      </AnimatePresence>
    </main>
  );
}