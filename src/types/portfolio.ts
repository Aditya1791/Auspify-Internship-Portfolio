export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  category: 'Full Stack' | 'AI & ML' | 'Frontend / UI' | 'Mobile & Cloud';
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
  architecture: string[];
  keyFeatures: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 - 100
  iconName?: string;
  category: 'Frontend' | 'Backend' | 'Database & Cloud' | 'Tools & DevOps';
  experienceYears: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  description: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
  highlights: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface SentMessage extends ContactFormData {
  id: string;
  timestamp: string;
}

export type PageView = 'home' | 'about' | 'projects' | 'skills' | 'contact';
