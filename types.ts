export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  description: string[];
  techStack: string[];
  // Special fields for the resume layout
  highlightCards?: {
    icon: string;
    title: string;
    description: string;
  }[];
  subProjects?: {
    name: string;
    description: string;
    columns?: {
      title: string;
      description: string;
    }[];
  }[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  link?: string;
  repoLink?: string;
  features: string[];
  techStack: string[];
  // Special fields for project steps
  processSteps?: {
    step: number;
    title: string;
    description: string;
  }[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
  description?: string;
  icon?: string;
}

export interface CoreValue {
  text: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}