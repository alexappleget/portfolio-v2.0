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
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#6CA4F8]" },
  ];

  return (
    <div className="flex flex-wrap gap-4 py-4">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="flex items-center gap-2 bg-[#4B5563]/40 border border-[#4B5563] rounded-full px-3 py-1 text-sm text-[#f8fafc] shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <tech.icon
            className={`h-5 w-5 ${tech.color} drop-shadow-md`}
            aria-hidden="true"
          />
          <span className="font-medium">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};
