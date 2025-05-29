import { JSX } from "react";
import { motion } from "framer-motion";

export const FunFacts = (): JSX.Element => {
  const funFacts = [
    { emoji: "☕", text: "Powered by coffee" },
    { emoji: "🧠", text: "Building cool things with AI" },
    { emoji: "✈️", text: "Travel addict – always planning the next trip" },
    { emoji: "🎮", text: "Gamer since childhood (prefer MMO - Healer)" },
    {
      emoji: "⚡",
      text: "Hufflepuff at heart – still waiting for my Hogwarts letter",
    },
  ];

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
    <motion.div variants={itemVariants} className="mt-16">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Random Facts About Me
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {funFacts.map((fact, index) => (
          <motion.div
            key={index}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all hover:bg-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 + index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            <span className="text-2xl">{fact.emoji}</span>
            <span className="text-purple-100">{fact.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
