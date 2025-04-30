import { TechStack } from "@/components/TechStack/TechStack";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { JSX } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export const Hero = (): JSX.Element => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center lg:justify-start pb-20 md:pb-0"
    >
      {/*Background Shapes*/}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-[#4f46e5] to-[#6366f1] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-[#4f46e5] to-[#6366f1] rounded-full blur-2xl opacity-20"></div>
      </div>

      <div className="z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-[#f1f5f9]">
              Hi, I&apos;m Alex, a
            </h1>
            <span className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-[#6366f1] leading-relaxed">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Problem Solver",
                  "Tech Enthusiast",
                ]}
                loop
                cursor
              />
            </span>
            <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed mt-2">
              I build scalable SaaS platforms, custom websites, and web apps
              that solve real business problems.
            </p>
            <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed">
              I focus on delivering fast, effective solutions that enhance user
              experiences and streamline business operations.
            </p>
          </div>
          <TechStack />
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              className="flex items-center px-6 py-3 bg-[#4f46e5] text-white rounded-lg hover:bg-[#6366f1] transition hover:cursor-pointer hover:shadow-lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let&apos;s Bring Your Ideas to Life
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="hidden lg:flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] overflow-hidden rounded-full border-4 border-[#6366f1] shadow-xl">
            <Image
              src="/headshot.jpg?height=400&width=400"
              alt="Alex Appleget"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
