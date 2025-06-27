import { Code2, Heart, Palette, Zap } from "lucide-react";
import { JSX, useState } from "react";
import { motion } from "framer-motion";

export const Passions = (): JSX.Element => {
  const [hoveredPassion, setHoveredPassion] = useState<number | null>(null);
  const passions = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Clean Architecture",
      description: "Building scalable systems that stand the test of time",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design Systems",
      description: "Creating consistent, beautiful user experiences",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance",
      description: "Optimizing every millisecond for the best UX",
      gradient: "from-yellow-400 to-orange-400",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "User Empathy",
      description: "Understanding and solving real human problems",
      gradient: "from-red-400 to-pink-400",
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
    <motion.div variants={itemVariants} className="space-y-6">
      <h2 className="text-3xl font-bold">What Drives Me</h2>
      <div className="grid gap-4">
        {passions.map((passion, index) => (
          <motion.div
            key={passion.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:bg-white/10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
            onHoverStart={() => setHoveredPassion(index)}
            onHoverEnd={() => setHoveredPassion(null)}
            whileHover={{ x: 8 }}
          >
            <div className="flex items-start gap-4">
              <motion.div
                className={`rounded-xl bg-gradient-to-r ${passion.gradient} p-3 text-white`}
                animate={{
                  scale: hoveredPassion === index ? 1.1 : 1,
                  rotate: hoveredPassion === index ? 5 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {passion.icon}
              </motion.div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold">{passion.title}</h3>
                <p className="text-purple-200">{passion.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
