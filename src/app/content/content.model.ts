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
    /** Nombre accesible del enlace; incluye el texto visible (EN/ES). */
    switchAriaLabel: string;
    /** Nombre del botón de tema. Es fijo: aria-pressed indica si el modo oscuro está activo. */
    themeLabel: string;
  };
  hero: {
    name: string;
    role: string;
    tagline: string;
    /** Texto del botón que baja a la sección de proyectos. */
    projectsLabel: string;
    /** Texto del botón de descarga del CV. */
    cvLabel: string;
    /** Ruta del PDF de este idioma, dentro de public/. */
    cvFile: string;
    /** Texto alternativo de la foto de perfil. */
    photoAlt: string;
  };
  about: {
    title: string;
    text: string;
    nextGoalsTitle: string;
    nextGoals: string[];
  };
  skills: {
    title: string;
    groups: SkillGroup[];
  };
  projects: {
    title: string;
    labels: ProjectLabels;
    items: Project[];
  };
  contact: {
    title: string;
    linkedinLabel: string;
    githubLabel: string;
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
  challenge: string;
  /** Texto del desplegable que muestra problema, rol, funcionalidades y desafío. */
  details: string;
  /** Subtítulo de las capturas dentro de "Ver detalles". */
  gallery: string;
  /** Comienzo del nombre accesible de cada captura ampliable ("Ampliar captura: ..."). */
  enlarge: string;
  /** Botón que cierra la captura ampliada. */
  close: string;
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
  /** Captura principal. Opcional: sin captura, la tarjeta muestra un placeholder. */
  image?: ProjectImage;
  /** Capturas extra dentro de "Ver detalles". El alt de cada una es también su texto visible. */
  gallery?: ProjectImage[];
}

export interface ProjectImage {
  src: string;
  /** Medidas reales del archivo: el navegador reserva el lugar y la página no salta. */
  width: number;
  height: number;
  alt: string;
}
