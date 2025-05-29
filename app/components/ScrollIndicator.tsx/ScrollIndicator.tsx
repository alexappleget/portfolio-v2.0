import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { JSX } from "react";

export const ScrollIndicator = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="flex flex-col items-center gap-2 text-cyan-200"
      >
        <span className="text-sm">Scroll to Explore</span>
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </motion.div>
  );
};
