import { JSX, useRef } from "react";
import { motion } from "framer-motion";
import { Palette, Rocket, Settings } from "lucide-react";
import { ServiceCard } from "@/app/components/ServiceCard/ServiceCard";

const services = [
  {
    emoji: "🚀",
    icon: <Rocket className="h-6 w-6" />,
    title: "SaaS Development",
    headline: "Build scalable platforms that grow with your business.",
    description:
      "I help startups and companies bring their software ideas to life with fully custom, scalable SaaS platforms. From MVPs to full-feature products — I use modern tools to make your product reliable, fast, and user-focused.",
    cta: "Let's Build Together",
    color: "from-cyan-400 to-blue-500",
    hoverColor: "#67e8f9",
  },
  {
    emoji: "🎨",
    icon: <Palette className="h-6 w-6" />,
    title: "Custom Websites",
    headline: "Make a bold first impression.",
    description:
      "I create beautiful, responsive websites that don't just look good — they drive engagement, build trust, and convert visitors into customers. Whether you need a marketing site, landing page, or portfolio — I've got you covered.",
    cta: "Start Your Project",
    color: "from-purple-400 to-pink-500",
    hoverColor: "#c084fc",
  },
  {
    emoji: "⚙️",
    icon: <Settings className="h-6 w-6" />,
    title: "Web App Optimization",
    headline: "Faster, smoother, and ready to scale.",
    description:
      "Already have a web app but it feels clunky or slow? I'll help you refactor, optimize, and modernize it for better performance and a seamless user experience — all while keeping accessibility and responsiveness in mind.",
    cta: "Request an Optimization",
    color: "from-blue-400 to-indigo-500",
    hoverColor: "#818cf8",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const glowVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.1, 0.15, 0.1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const Services = (): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="services"
      className="relative pt-8 pb-16 md:pt-16 md:pb-32 px-8 md:px-16 lg:px-32 overflow-hidden bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-900 text-white"
    >
      {/* Animated Glow effects */}
      <motion.div
        className="absolute left-20 top-20 h-72 w-72 rounded-full bg-purple-600 opacity-10 blur-[100px]"
        variants={glowVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-600 opacity-10 blur-[100px]"
        variants={glowVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      <motion.div
        ref={ref}
        className="mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section header with staggered animation */}
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
            My{" "}
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
              Services
            </motion.span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-3xl text-xl text-blue-100 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Whether you&apos;re a startup founder or small business owner, I
            help you build fast, scalable, and beautiful web solutions that
            solve real problems.
          </motion.p>

          {/* Animated subtitle accent */}
          <motion.div
            className="flex items-center justify-center mt-4 space-x-2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
