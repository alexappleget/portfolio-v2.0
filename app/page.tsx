"use client";

import { About } from "@/app/sections/About/about";
import { Contact } from "@/app/sections/Contact/contact";
import { Footer } from "@/app/sections/Footer/footer";
import { Hero } from "@/app/sections/Hero/hero";
import { Services } from "@/app/sections/Services/services";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";
import { Articles } from "./sections/Articles/articles";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <ProjectsSection />
      <Articles />
      <Contact />
      <Footer />
    </main>
  );
}
