import { TechStack } from "@/components/TechStack";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { JSX } from "react";

export const Hero = (): JSX.Element => {
  return (
    <section className="min-h-screen flex items-center bg-[#20242d] px-6 md:px-12 lg:px-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-[#f1f5f9]">
              Hi, I&apos;m Alex, a Full-Stack Software Engineer
            </h1>
            <p className="text-[#cbd5e1] text-lg sm:text-xl">
              I build scalable SaaS platforms, custom websites, and web apps
              that solve real business problems.
            </p>
            <p className="text-[#cbd5e1] text-lg sm:text-xl">
              I focus on delivering fast, effective solutions that enhance user
              experiences and streamline business operations.
            </p>
          </div>
          <TechStack />
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center px-6 py-3 bg-[#4f46e5] text-white rounded-lg hover:bg-[#6366f1] transition hover:cursor-pointer hover:shadow-lg">
              Let&apos;s Bring Your Ideas to Life
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full border-4 border-[#334155] shadow-xl">
            <Image
              src="/headshot.jpg?height=400&width=400"
              alt="Alex Appleget"
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
