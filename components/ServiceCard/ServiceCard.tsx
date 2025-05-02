import { ArrowRight, Globe, Layers, Zap, type LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Card/card";
import { JSX } from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: "Layers" | "Globe" | "Zap";
}

export const ServiceCard = ({
  title,
  description,
  icon,
}: ServiceCardProps): JSX.Element => {
  const IconComponent: Record<string, LucideIcon> = {
    Layers,
    Globe,
    Zap,
  };

  const Icon = IconComponent[icon];
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full flex flex-col bg-[#2d3748] border border-[#4B5563] hover:shadow-lg">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-[#38bdf8]/20 flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-[#38bdf8]" />
          </div>
          <CardTitle className="text-[#f8fafc] text-xl font-semibold tracking-tight">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-[#cbd5e1] text-base leading-relaxed">
            {description}
          </p>
        </CardContent>
        <CardFooter>
          <button
            className="flex items-center px-4 py-2 bg-[#38bdf8] text-[#20242d] rounded-lg hover:bg-[#4f46e5] hover:text-[#f8fafc] transition hover:shadow-md hover:cursor-pointer"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Get in contact to learn more"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
