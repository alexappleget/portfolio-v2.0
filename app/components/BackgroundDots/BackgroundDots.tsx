import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const BackgroundDots = () => {
  const [dotPositions, setDotPositions] = useState<
    { top: number; left: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    setDotPositions(
      Array.from({ length: 50 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  if (dotPositions.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {dotPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white opacity-30"
          style={{
            top: `${pos.top}%`,
            left: `${pos.left}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: pos.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: pos.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
