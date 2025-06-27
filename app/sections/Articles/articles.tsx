"use client";

import { JSX, useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { articles } from "@/app/data/articles";
import { ArticleCard } from "@/app/components/ArticleCard/article-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
    },
  },
};

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

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const projectCardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.8,
    rotateX: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const Articles = (): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleCardClick = (index: number) => {
    if (isMobile) {
      setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  const handleHover = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleHoverEnd = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  return (
    <section
      id="articles"
      className="relative pt-8 pb-16 md:pt-16 md:pb-32 px-8 md:px-16 lg:px-32 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white"
    >
      <motion.div
        ref={ref}
        className="mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
      >
        {/* Enhanced Section Header */}
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
            Latest{" "}
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
              Articles
            </motion.span>
          </motion.h2>

          <motion.p
            className="mx-auto max-w-3xl text-xl text-blue-100 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Insights, tutorials, and thoughts on web development, AI, and the
            latest technologies I&apos;m exploring.
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

        {/* Enhanced Projects Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={gridVariants}
        >
          {/* Mobile interaction note */}
          <p className="text-center text-blue-200 md:hidden mb-4">
            Tap on a article card to view more details.
          </p>

          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              variants={projectCardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                rotateY: hoveredIndex === index ? 5 : 0,
                transition: { duration: 0.3 },
              }}
              onClick={() => handleCardClick(index)}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glow effect that appears on hover */}
              <motion.div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400/15 via-purple-500/15 to-pink-500/15 blur-lg opacity-0 pointer-events-none"
                animate={{
                  opacity:
                    hoveredIndex === index || selectedIndex === index ? 0.8 : 0,
                  scale:
                    hoveredIndex === index || selectedIndex === index
                      ? 1.05
                      : 1,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ zIndex: -1 }}
              />

              {/* Project Card with enhanced animations */}
              <div className="relative z-10">
                <ArticleCard
                  article={article}
                  index={index}
                  selectedIndex={selectedIndex}
                  hoveredIndex={hoveredIndex}
                  onHover={handleHover}
                  onHoverEnd={handleHoverEnd}
                />
              </div>

              {/* Particle effect on hover */}
              {(hoveredIndex === index || selectedIndex === index) && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        y: [0, -20],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
