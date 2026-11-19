/**
 * Forma que tienen que respetar los textos de cada idioma (es.ts y en.ts).
 * Si a un idioma le falta un campo, el proyecto no compila.
 */
export interface SiteContent {
  hero: {
    name: string;
    role: string;
    tagline: string;
  };
  about: {
    title: string;
    text: string;
  };
  skills: {
    title: string;
    groups: SkillGroup[];
    nextGoalsTitle: string;
    nextGoals: string[];
  };
  projects: {
    title: string;
    items: Project[];
  };
  contact: {
    title: string;
    linkedinLabel: string;
    emailLabel: string;
  };
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Project {
  name: string;
  summary: string;
  problem: string;
  /** Opcional: solo se completa cuando el dato está confirmado en docs/contenido.md. */
  role?: string;
  features: string[];
  stack: string[];
  /** Opcional: solo se completa cuando el dato está confirmado en docs/contenido.md. */
  challenge?: string;
  url: string;
  status: string;
}
