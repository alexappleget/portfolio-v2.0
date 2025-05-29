import { JSX } from "react";

export interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  codeUrl: string;
  techStack: string[];
  category: string;
  color: string;
  comingSoon: boolean;
}

export interface IProjectCard {
  project: IProject;
  index: number;
  selectedIndex: number | null;
  hoveredIndex: number | null;
  onHover: (index: number) => void;
  onHoverEnd: () => void;
}

export interface IService {
  emoji: string;
  icon: JSX.Element;
  title: string;
  headline: string;
  description: string;
  cta: string;
  color: string;
  hoverColor: string;
}
