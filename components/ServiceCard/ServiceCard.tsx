import { ArrowRight, Globe, Layers, Zap, type LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Card/card";
import { JSX } from "react";

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
    <Card className="h-full flex flex-col bg-[#262b35] border border-[#334155] hover:shadow-lg hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-[#4f46e5]/20 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-[#4f46e5]" />
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
          className="flex items-center px-4 py-2 bg-[#4f46e5] text-[#f8fafc] rounded-lg hover:bg-[#6366f1] transition hover:shadow-md hover:cursor-pointer"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Let&apos;s Build Together
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </CardFooter>
    </Card>
  );
};
