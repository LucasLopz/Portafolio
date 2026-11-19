/**
 * Forma que tienen que respetar los textos de cada idioma (es.ts y en.ts).
 * Si a un idioma le falta un campo, el proyecto no compila.
 */
export interface SiteContent {
  header: {
    /** Nombre del menú para lectores de pantalla. */
    navLabel: string;
    /** Texto visible del enlace al otro idioma. */
    switchLabel: string;
    /** Descripción completa del enlace para lectores de pantalla. */
    switchAriaLabel: string;
  };
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
    labels: ProjectLabels;
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

/** Títulos de cada parte de la tarjeta de proyecto. */
export interface ProjectLabels {
  problem: string;
  role: string;
  features: string;
  stack: string;
  challenge: string;
  visit: string;
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
