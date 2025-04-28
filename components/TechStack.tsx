import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

export const TechStack = () => {
  const technologies = [
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  ];

  return (
    <div className="flex flex-wrap gap-4 py-2">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex items-center gap-1.5 bg-gray-200 rounded-full px-3 py-1 text-sm"
        >
          <tech.icon className={`h-5 w-5 ${tech.color}`} />
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  );
};
