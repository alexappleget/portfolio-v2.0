import { JSX } from "react";

export interface IArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  href: string;
  image: string;
  tags: string[];
  color: string;
}

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

export interface IArticleCard {
  article: IArticle;
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
