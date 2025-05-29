import { JSX } from "react";
import { motion } from "framer-motion";
import { IService } from "@/Types/interface";

export const ServiceCard = ({
  index,
  service,
}: {
  index: number;
  service: IService;
}): JSX.Element => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      key={service.title}
      className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-indigo-950/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-indigo-950/40"
      variants={cardVariants}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      style={{
        transformOrigin: "center",
      }}
    >
      {/* Service Content - Added relative positioning and higher z-index */}
      <div className="relative z-10 flex flex-col">
        {/* Icon with floating animation */}
        <motion.div
          className={`mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center self-start rounded-xl bg-gradient-to-r ${service.color} text-white`}
          whileHover={{
            scale: 1.2,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.5 },
          }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        >
          <motion.span
            className="text-2xl"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            {service.emoji}
          </motion.span>
        </motion.div>

        {/* Content with staggered reveal */}
        <div className="mb-6 flex-1">
          <motion.h3
            className="mb-2 text-2xl font-bold text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            viewport={{ once: true }}
          >
            {service.title}
          </motion.h3>
          <motion.h4
            className="mb-4 text-lg font-medium text-purple-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
          >
            {service.headline}
          </motion.h4>
          <motion.p
            className="text-blue-100"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            viewport={{ once: true }}
          >
            {service.description}
          </motion.p>
        </div>
      </div>

      {/* Enhanced hover glow effect - Lower z-index */}
      <motion.div
        className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-25 z-0"
        style={{
          background: `linear-gradient(45deg, ${service.hoverColor}, transparent)`,
        }}
        whileHover={{
          scale: 1.05,
          opacity: 0.3,
        }}
      />

      {/* Subtle border animation - Lower z-index */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-transparent pointer-events-none z-0"
        style={{
          background: `linear-gradient(45deg, ${service.hoverColor}20, transparent) border-box`,
          mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
        }}
        animate={{
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.8,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};
