import { TechStack } from "@/app/components/TechStack/TechStack";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import { JSX } from "react";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

export const Hero = (): JSX.Element => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center lg:justify-start"
    >
      {/*Background Shapes*/}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-40 h-40 md:w-96 md:h-96 bg-gradient-to-br from-[#4f46e5] to-[#38bdf8] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 md:w-96 md:h-96 bg-gradient-to-br from-[#4f46e5] to-[#6366f1] rounded-full blur-2xl opacity-20"></div>
      </div>

      <div className="z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f8fafc]">
              Hi, I&apos;m Alex, a
            </h1>
            <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#6366f1] leading-snug">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Website Builder",
                  "Web App Architect",
                ]}
                loop
                cursor
              />
            </span>
            <p className="text-[#cbd5e1] text-lg sm:text-xl leading-relaxed mt-4">
              I build scalable SaaS platforms, custom websites, and web apps
              that solve real business problems.
            </p>
            <p className="text-[#cbd5e1] text-lg sm:text-xl leading-relaxed">
              I focus on delivering fast, effective solutions that enhance user
              experiences and streamline business operations.
            </p>
          </div>

          {/* Tech Stack */}
          <TechStack />

          {/* Call-to-Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              className="flex items-center px-6 py-3 bg-[#f59e0b] text-[#20242d] text-lg font-medium rounded-lg hover:bg-[#fbbf24] hover:scale-105 transition-transform hover:cursor-pointer hover:shadow-lg"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label="Scroll to Services Section"
            >
              Get Started
              <ArrowRight className="ml-4 h-5 w-5" />
            </button>
            <Link
              href="https://calendly.com/alexappleget2014/30min"
              target="_blank"
              rel="noopener noreferror"
              className="flex items-center px-6 py-3 bg-transparent text-[#38bdf8] border-2 border-[#38bdf8] text-lg font-medium rounded-lg hover:bg-[#38bdf8] hover:text-[#20242d] hover:scale-105 transition-transform hover:cursor-pointer hover:shadow-lg"
            >
              Book a Free Consultation
              <Calendar className="ml-4 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:flex justify-center lg:justify-end">
          <div
            className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] overflow-hidden rounded-full border-4 border-[#6366f1] shadow-xl hover:cursor-pointer hover:scale-105 transition-transform"
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
          </div>
        </div>
      </div>
    </section>
  );
};
