"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [startSplit, setStartSplit] = useState<boolean>(false);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      {/* Background layer ONLY during vertical line */}
      {!startSplit && <div className="absolute inset-0 bg-[#1e293b] z-0" />}

      {/* Vertical Line Animation */}
      {!startSplit && (
        <motion.div
          className="bg-[#38bdf8] w-1 h-full z-10"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ transformOrigin: "center" }}
          onAnimationComplete={() => setStartSplit(true)}
        />
      )}
      {startSplit && (
        <>
          {/* Left Panel */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#1e293b] border-r-4 border-[#38bdf8] z-10"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          {/* Right Panel */}
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#1e293b] border-l-4 border-[#38bdf8] z-10"
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            onAnimationComplete={onComplete}
          />
        </>
      )}
    </div>
  );
};
