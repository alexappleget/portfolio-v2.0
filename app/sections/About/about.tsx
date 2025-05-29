import { FunFacts } from "@/app/components/FunFacts/FunFacts";
import { Passions } from "@/app/components/Passions/Passions";
import { motion, useScroll, useTransform } from "framer-motion";
import { JSX, useRef } from "react";

export const About = (): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="about"
      className="relative pt-8 pb-16 md:pt-16 md:pb-32 px-8 md:px-16 lg:px-32 overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 text-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent"></div>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl"
          style={{ y: y1, rotate }}
        />
        <motion.div
          className="absolute right-1/3 top-2/3 h-24 w-24 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-xl"
          style={{ y: y2, rotate: useTransform(rotate, (r) => -r) }}
        />
        <motion.div
          className="absolute left-2/3 bottom-1/4 h-40 w-40 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-xl"
          style={{ y: y1 }}
        />
      </div>

      <motion.div
        ref={ref}
        className="mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          variants={headerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About{" "}
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Me
            </motion.span>
          </motion.h2>
        </motion.div>
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10"
            whileHover={{ y: -8 }}
          >
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl transition-all group-hover:scale-150"></div>

            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-bold">My Story</h2>
              <div className="space-y-4 text-lg leading-relaxed text-purple-100">
                <p>
                  I&apos;m Alex, a passionate Full-Stack Software Engineer
                  dedicated to creating impactful digital solutions. My journey
                  in software development has been driven by a desire to solve
                  real-world problems through technology.
                </p>
                <p>
                  I specialize in building scalable SaaS platforms, custom
                  websites, and optimizing web applications to deliver
                  exceptional user experiences. I thrive on collaborating with
                  clients to bring their ideas to life.
                </p>
                <p>
                  Based in the United States, I work remotely with clients
                  nationwide, bringing a client-centric approach to every
                  project. I&apos;m constantly exploring new technologies and
                  methodologies to stay ahead in the ever-evolving tech
                  landscape.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Passions Grid */}
          <Passions />
        </div>

        {/* Fun Facts Section */}
        <FunFacts />
      </motion.div>
    </section>
  );
};
