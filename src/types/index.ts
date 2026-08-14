export type Project = {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image?: string;
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  details?: { challenge: string; solution: string; learning: string; screenshots: string[] };
};
export type SkillGroup = { category: string; skills: string[] };
export type ExperienceItem = { role: string; organization: string; period: string; type: string; responsibilities: string[] };
