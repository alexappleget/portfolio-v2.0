import Image from "next/image";
import { JSX } from "react";

export const About = (): JSX.Element => {
  return (
    <section id="about" className="py-12 md:py-24 ">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Image Section */}
        <div className="order-2 lg:order-1 lg:row-auto row-start-1">
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/sunglasses.jpg?height=400&width=600"
              alt="Alex working"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="space-y-4 order-1 lg:order-2 lg:row-auto row-start-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#f1f5f9]">
            About Me
          </h2>
          <p className="text-lg text-[#94a3b8] leading-relaxed">
            I&apos;m a passionate Full-Stack Software Engineer dedicated to
            creating impactful digital solutions. My journey in software
            development has been driven by a desire to solve real-world problems
            through technology.
          </p>
          <p className="text-lg text-[#94a3b8] leading-relaxed">
            I&apos;m always exploring new technologies and methodologies to
            solve problems in innovative ways. I&apos;m excited to work with
            clients from all industries and help them bring their ideas to life.
          </p>
          <p className="text-lg text-[#94a3b8] leading-relaxed">
            Based in the United States, I work remotely with clients nationwide,
            bringing a client-centric approach to every project.
          </p>
          <div className="pt-4">
            <button
              className="inline-block px-6 py-3 bg-[#4f46e5] text-white rounded-lg hover:bg-[#6366f1] transition-colors"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
