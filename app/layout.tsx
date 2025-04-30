"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const servicesSection = document.getElementById("services");
      if (heroSection && servicesSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const servicesRect = servicesSection.getBoundingClientRect();
        setShowScrollToTop(
          heroRect.bottom < 0 && servicesRect.top <= window.innerHeight
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 flex items-center gap-2 px-4 py-3 bg-[#4f46e5] text-white text-lg font-medium rounded-full shadow-lg hover:bg-[#6366f1] transition-transform transform hover:scale-105"
          >
            <span className="material-icons text-2xl">
              <ArrowUp />
            </span>
            <span>Scroll to Top</span>
          </button>
        )}
      </body>
    </html>
  );
}
