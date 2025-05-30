import { TechStack } from "@/app/components/TechStack/TechStack";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { JSX, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleBackground from "@/app/components/ParticleBackground/ParticleBackground";
import { ScrollIndicator } from "@/app/components/ScrollIndicator.tsx/ScrollIndicator";

export const Hero = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center lg:justify-start px-8 md:px-16 lg:px-32 bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-900"
    >
      <ParticleBackground />

      <div className="z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div style={{ opacity, scale, y }} className="space-y-8">
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-5xl font-bold leading-tight tracking-tighter text-white lg:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Alex
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-cyan-100 md:text-2xl leading-relaxed mt-4"
            >
              A Full-Stack Software Engineer who thrives on building clean,
              scalable, and user-focused web apps that bring real ideas to life.
            </motion.p>
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h3 className="mb-3 text-lg font-medium text-purple-300">
              Tech Stack
            </h3>
            <TechStack />
          </motion.div>

          {/* Call-to-Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 text-lg font-medium rounded-lg transition-all duration-300
    hover:shadow-[0_0_24px_4px_rgba(168,85,247,0.6),0_0_40px_8px_rgba(236,72,153,0.4)]
    hover:from-purple-600 hover:to-pink-600 focus:ring-4 focus:ring-cyan-400/50 focus:outline-none active:scale-95 hover:scale-105 hover:cursor-pointer"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label="Scroll to Contact Form Section"
            >
              <span className="relative z-10">
                Let&apos;s Bring Your Ideas to Life
              </span>
              <span className="absolute inset-0 -z-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur-xl transition-opacity duration-300 hover:opacity-70"></span>
            </button>
            <Link
              href="https://calendly.com/alexappleget2014/30min"
              target="_blank"
              rel="noopener noreferror"
              className="flex items-center px-6 py-3 text-lg font-medium rounded-lg hover:scale-105 hover:cursor-pointer hover:shadow-lg border-2 border-purple-400 text-purple-200 transition-all hover:bg-purple-900/30 hover:text-white"
            >
              Book a Free Consultation
              <Calendar className="ml-4 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <div className="hidden lg:flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] flex items-center justify-center">
            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-2xl pointer-events-none z-0"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 blur-3xl pointer-events-none z-0"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ opacity }}
              className="relative w-full h-full overflow-hidden rounded-full border-4 border-purple-400 shadow-xl shadow-purple-500/30 hover:cursor-pointer hover:scale-105 transition-transform z-10"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Image
                src="/headshot.jpg?height=400&width=400"
                alt="Alex Appleget, Full-Stack Software Engineer"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <ScrollIndicator />
      </div>
    </section>
  );
};
