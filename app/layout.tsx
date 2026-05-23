import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingHearts from "@/components/FloatingHearts";
import ThemeToggle from "@/components/ThemeToggle";
import MusicToggle from "@/components/MusicToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Will you go out with me? ❤️",
  description: "A cute interactive invitation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={`${inter.className} bg-romantic-50 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen relative overflow-x-hidden overflow-y-auto transition-colors duration-300`}
      >
        <FloatingHearts />
        <div className="fixed top-4 right-4 flex gap-2 z-50">
          <MusicToggle />
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}