import { IProject } from "@/Types/interface";

export const projects: IProject[] = [
  {
    id: 1,
    title: "Secret Santa Exchange",
    description:
      "Elfgorithm is an AI-powered Secret Santa platform that makes gift exchanges delightful and effortless. Perfect for organizing gift exchanges between colleagues, friends, and family, Elfgorithm takes the guesswork out of gift-giving with personalized AI suggestions.",
    image: "/elecretanta.png",
    liveUrl: "https://elfgorithm.vercel.app/",
    codeUrl: "https://github.com/LetsGetTechnical/elecretanta",
    techStack: ["Next.js", "TypeScript", "Supabase", "OpenAI"],
    category: "AI",
    color: "#6366f1",
    comingSoon: false,
  },
  {
    id: 2,
    title: "Gridiron Survivor",
    description:
      "Gridiron Survivor is an NFL pick’em web app that lets users join leagues, make weekly picks, and compete to stay alive. Built with Next.js, React, and Appwrite, it features custom lockout logic, real-time updates, user authentication, and a clean, responsive UI.",
    image: "/gridiron-survivor.png",
    liveUrl: "https://www.gridironsurvivor.com/",
    codeUrl: "https://github.com/LetsGetTechnical/gridiron-survivor",
    techStack: ["Next.js", "TypeScript", "Appwrite"],
    category: "SaaS",
    color: "#10b981",
    comingSoon: false,
  },
  {
    id: 3,
    title: "AI Chatbot",
    description:
      "Coming Soon - AI Chatbot is a personal assistant app that will let users ask questions about me, my work, and web development. Built with Next.js, TypeScript, Supabase, and OpenAI, it’s designed as an interactive portfolio and helpful learning resource.",
    image:
      "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: "",
    codeUrl: "",
    techStack: ["NextJS", "TypeScript", "Supabase", "OpenAI"],
    category: "AI",
    color: "#3b82f6",
    comingSoon: true,
  },
];
