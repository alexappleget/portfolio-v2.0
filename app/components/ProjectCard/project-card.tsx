"use client";

import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Eye, Github } from "lucide-react";
import { IProjectCard } from "@/Types/interface";
import Link from "next/link";

export const ProjectCard = ({
  project,
  index,
  selectedIndex,
  hoveredIndex,
  onHover,
  onHoverEnd,
}: IProjectCard) => {
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
        whileHover={
          project.comingSoon
            ? {}
            : {
                scale: 1.02,
                borderColor: "rgba(255, 255, 255, 0.2)",
                backgroundColor: "rgba(79, 70, 229, 0.15)",
              }
        }
        transition={{ duration: 0.3 }}
      >
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          <motion.div
            className="h-full w-full bg-gradient-to-br from-indigo-900 to-purple-900"
            whileHover={project.comingSoon ? {} : { scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex h-full items-center justify-center">
              <motion.div
                className="text-white/50"
                animate={
                  hoveredIndex === index && !project.comingSoon
                    ? { scale: [1, 1.2, 1], rotate: [0, 5, 0] }
                    : { scale: 1, rotate: 0 }
                }
                transition={{ duration: 0.5 }}
              >
                <ExternalLink className="h-12 w-12" />
              </motion.div>
            </div>
          </motion.div>

          {/* Hover overlay */}
          <AnimatePresence>
            {(hoveredIndex === index || selectedIndex === index) && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/50 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-4">
                  <motion.a
                    href={project.comingSoon ? "" : project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-indigo-900 ${
                      project.comingSoon ? "cursor-not-allowed" : ""
                    }`}
                    onClick={(e) => {
                      if (project.comingSoon) {
                        e.preventDefault();
                      }
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Eye className="h-4 w-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.comingSoon ? "" : project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/30 ${
                      project.comingSoon ? "cursor-not-allowed" : ""
                    }`}
                    onClick={(e) => {
                      if (project.comingSoon) {
                        e.preventDefault();
                      }
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="mb-1 flex items-center">
            <span
              className="mr-2 inline-block h-3 w-3 rounded-full"
              style={{ backgroundColor: project.color }}
            />
            <span className="text-sm font-medium text-blue-200">
              {project.category}
            </span>
          </div>

          <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>

          <p className="mb-4 text-blue-100">{project.description}</p>

          {/* Tech Stack */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.2 + techIndex * 0.05,
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* View Project Button */}
          <motion.div
            className={`relative overflow-hidden rounded-full ${
              project.comingSoon ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={(e) => {
              if (project.comingSoon) {
                e.preventDefault();
              }
            }}
            whileHover={project.comingSoon ? {} : { scale: 1.02 }}
            whileTap={project.comingSoon ? {} : { scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
              style={{
                background: `linear-gradient(90deg, ${project.color}80, ${project.color}40)`,
              }}
              initial={{ x: "-100%" }}
              animate={
                hoveredIndex === index && !project.comingSoon
                  ? { x: "0%" }
                  : { x: "-100%" }
              }
              transition={{ duration: 0.4 }}
            />

            <Link
              href={project.comingSoon ? "" : project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative flex w-full items-center justify-between rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all group-hover:border-white/40 ${
                project.comingSoon ? "cursor-not-allowed" : ""
              }`}
            >
              <span>
                {project.comingSoon ? "Coming Soon" : "View Project Details"}
              </span>
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
                background: `linear-gradient(45deg, ${project.color}40, transparent)`,
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
