export interface ProjectHighlight {
  label: string;
  value: string;
}

export interface ProjectProcessStep {
  phase: string;
  title: string;
  description: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  category: string;
  year: string;
  technologies: string[];
  image: string;
  role: string;
  projectType: string; // e.g. "Portfolio / Demonstration Project"
  overview: string;
  problem: string;
  solution: string;
  highlights: ProjectHighlight[]; // Neutral architectural highlights (e.g., "Architecture", "Responsive")
  features: ProjectFeature[];
  process: ProjectProcessStep[];
  deliverables: string[]; // Technical deliverables (no fake stats)
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string; // Clearly editable or domain-focused
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface TechnologyItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps & Tools";
  role: string; // Technical role in stack (no fake years)
  description: string;
  highlight?: boolean;
}

export interface RepositoryItem {
  name: string;
  description: string;
  language: string;
  url: string;
  tags: string[];
}

export interface CollaborationPrincipleItem {
  id: string;
  principle: string;
  tagline: string;
  description: string;
}

export interface FaqItem {
  number: string;
  question: string;
  answer: string;
}
