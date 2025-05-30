import { useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiOpenai,
} from "react-icons/si";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../Tooltip/tooltip";

export const TechStack = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const technologies = [
    {
      name: "React",
      icon: <SiReact className="text-lg lg:text-2xl" />,
      description: "Modern UI Library",
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-lg lg:text-2xl" />,
      description: "React Framework",
      color: "#ffffff",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-lg lg:text-2xl" />,
      description: "Typed JavaScript",
      color: "#3178C6",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-lg lg:text-2xl" />,
      description: "Utility-First CSS",
      color: "#38B2AC",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-lg lg:text-2xl" />,
      description: "JavaScript Runtime",
      color: "#339933",
    },
    {
      name: "Supabase",
      icon: <SiSupabase className="text-lg lg:text-2xl" />,
      description: "Backend as a Service",
      color: "#3ECF8E",
    },
    {
      name: "OpenAI API",
      icon: <SiOpenai className="text-lg lg:text-2xl" />,
      description: "AI-Powered Language Models",
      color: "#ffffff",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      <TooltipProvider>
        {technologies.map((tech, index) => (
          <Tooltip key={tech.name}>
            <TooltipTrigger asChild>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative flex h-8 md:h-14 w-8 md:w-14 items-center justify-center rounded-xl bg-slate-800/50 p-2 backdrop-blur-sm transition-all duration-300"
                style={{
                  boxShadow:
                    hoveredIndex === index
                      ? `0 0 20px ${tech.color}40`
                      : "none",
                  border: `1px solid ${
                    hoveredIndex === index
                      ? tech.color
                      : "rgba(255,255,255,0.1)"
                  }`,
                }}
              >
                <div className="text-2xl" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute -bottom-1 -left-1 -right-1 -top-1 -z-10 rounded-xl opacity-20"
                    style={{
                      background: `radial-gradient(circle, ${tech.color} 0%, transparent 70%)`,
                    }}
                  />
                )}
              </motion.div>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="bg-slate-800/90 backdrop-blur-md border border-white mt-2"
            >
              <p className="font-medium text-white">{tech.name}</p>
              <p className="text-xs text-cyan-200/80">{tech.description}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};
