"use client";

import { Loader } from "@/components/Loader/Loader";
import { About } from "@/sections/About/about";
import { Contact } from "@/sections/Contact/contact";
import { FAQ } from "@/sections/FAQ/FAQ";
import { Footer } from "@/sections/Footer/footer";
import { Hero } from "@/sections/Hero/hero";
import { Services } from "@/sections/Services/services";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
