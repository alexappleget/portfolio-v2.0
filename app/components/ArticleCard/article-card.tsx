"use client";

import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { IArticleCard } from "@/Types/interface";
import Link from "next/link";
import Image from "next/image";

export const ArticleCard = ({
  article,
  index,
  hoveredIndex,
  onHover,
  onHoverEnd,
}: IArticleCard) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
      className="group relative"
      onHoverStart={() => onHover(index)}
      onHoverEnd={onHoverEnd}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        ref={cardRef}
        className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-indigo-950/30 backdrop-blur-sm"
        whileHover={{
          scale: 1.02,
          borderColor: "rgba(255, 255, 255, 0.2)",
          backgroundColor: "rgba(79, 70, 229, 0.15)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Article Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="mb-1 flex items-center">
            <span
              className="mr-2 inline-block h-3 w-3 rounded-full"
              style={{ backgroundColor: article.color }}
            />
            <span className="text-sm font-medium text-blue-200">
              {article.category}
            </span>
          </div>

          <h3 className="mb-3 text-xl font-bold text-white">{article.title}</h3>

          <p className="mb-4 text-blue-100">{article.excerpt}</p>

          {/* Tech Stack */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.2 + tagIndex * 0.05,
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* View Project Button */}
          <motion.div
            className={`relative overflow-hidden rounded-full`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
              style={{
                background: `linear-gradient(90deg, ${article.color}80, ${article.color}40)`,
              }}
              initial={{ x: "-100%" }}
              animate={hoveredIndex === index ? { x: "0%" } : { x: "-100%" }}
              transition={{ duration: 0.4 }}
            />

            <Link
              href={article.href}
              className={`relative flex w-full items-center justify-between rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all group-hover:border-white/40`}
            >
              <span>{"View Blog Article"}</span>
              <motion.div
                animate={
                  hoveredIndex === index
                    ? {
                        x: [0, 5, 0],
                        transition: {
                          repeat: Infinity,
                          duration: 1.5,
                        },
                      }
                    : { x: 0 }
                }
              >
                <ArrowUpRight className="h-4 w-4" />
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Card glow effect */}
        <AnimatePresence>
          {hoveredIndex === index && (
            <motion.div
              className="absolute -inset-px rounded-2xl"
              style={{
                background: `linear-gradient(45deg, ${article.color}40, transparent)`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
