"use client";

import { About } from "@/app/sections/About/about";
import { Contact } from "@/app/sections/Contact/contact";
import { FAQ } from "@/app/sections/FAQ/FAQ";
import { Footer } from "@/app/sections/Footer/footer";
import { Hero } from "@/app/sections/Hero/hero";
import { Services } from "@/app/sections/Services/services";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Loader } from "./components/Loader/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <main className="bg-gradient-to-b from-[#1e293b] to-[#20242d] px-8 md:px-16 lg:px-32">
        <Hero />
        {!isLoading && (
          <>
            <Services />
            <About />
            <Contact />
            <FAQ />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}
