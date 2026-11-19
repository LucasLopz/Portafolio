import { SiteContent } from './content.model';

/** Textos en español. Fuente: docs/contenido.md. */
export const ES: SiteContent = {
  seo: {
    title: 'Lucas Lopez Saaied | Full Stack Developer Jr.',
    description:
      'Técnico en Programación (UTN) en Mar del Plata. Desarrollo aplicaciones web con Java, ' +
      'JavaScript, Angular y MySQL, con sitios publicados y en uso.',
    ogLocale: 'es_AR',
    ogImage: '/images/og-es.jpg',
    ogImageAlt: 'Lucas Lopez Saaied, Full Stack Developer Jr.',
  },
  header: {
    navLabel: 'Secciones',
    switchLabel: 'EN',
    switchAriaLabel: 'Ver el sitio en inglés (EN)',
    themeLabel: 'Modo oscuro',
  },
  hero: {
    name: 'Lucas Lopez Saaied',
    role: 'Full Stack Developer Jr.',
    tagline: 'Técnico en Programación (UTN), en busca de mi primer puesto en IT.',
    projectsLabel: 'Ver proyectos',
    cvLabel: 'Descargar CV',
    cvFile: '/cv/cv-es.pdf',
    photoAlt: 'Foto de Lucas Lopez Saaied',
  },
  about: {
    title: 'Sobre mí',
    text:
      'Soy Técnico en Programación recibido en la UTN. Desarrollo aplicaciones web con Java, ' +
      'JavaScript, Angular, HTML y CSS, con bases de datos MySQL y control de versiones en GitHub. ' +
      'Ya publiqué sitios reales que hoy están en uso. Actualmente me estoy formando en QA y busco ' +
      'mi primer puesto como Full Stack Developer o en roles afines de IT.',
    nextGoalsTitle: 'Próximos objetivos',
    nextGoals: [
      'TypeScript',
      'Testing automatizado con Playwright',
      'Spring Boot',
      'Docker',
      'AWS',
    ],
  },
  skills: {
    title: 'Habilidades',
    groups: [
      { name: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Angular'] },
      { name: 'Backend y datos', items: ['Java', 'C', 'MySQL'] },
      { name: 'Herramientas', items: ['Git y GitHub', 'Vercel', 'Railway', 'Claude Code'] },
    ],
  },
  projects: {
    title: 'Proyectos',
    labels: {
      problem: 'Problema',
      role: 'Mi rol',
      features: 'Funcionalidades',
      challenge: 'Lo más difícil',
      details: 'Ver detalles',
      gallery: 'Capturas',
      enlarge: 'Ampliar captura',
      close: 'Cerrar',
      visit: 'Ver sitio',
    },
    items: [
      {
        name: 'Associates Realty',
        summary:
          'Sitio de una red de servicios inmobiliarios en Miami para inversores extranjeros y ' +
          'propietarios a distancia.',
        problem:
          'El negocio necesitaba una página que captara clientes y con una estética acorde al ' +
          'rubro inmobiliario.',
        role:
          'Mejoré el sitio existente: sumé llamadas a la acción, formularios, carga de leads y vías ' +
          'de contacto directo.',
        features: [
          'Sitio en inglés, español e italiano',
          'Revisión de propiedad en cuatro preguntas',
          'Formulario de contacto por pasos',
          'Páginas por servicio',
          'Preguntas frecuentes',
        ],
        stack: ['TypeScript', 'Vercel', 'Railway', 'APIs REST'],
        challenge:
          'Entender las necesidades del cliente en un rubro que no conocía y trabajar el contenido ' +
          'en inglés, cuidando el SEO y el AEO.',
        url: 'https://associates-realty.net/',
        status: 'Terminado en agosto de 2026.',
        image: {
          src: '/images/projects/associates-realty/hero.webp',
          width: 1200,
          height: 515,
          alt: 'Captura de la página de inicio de Associates Realty',
        },
        gallery: [
          {
            src: '/images/projects/associates-realty/call-to-action.webp',
            width: 1200,
            height: 413,
            alt: 'Llamada a la acción con formulario de contacto por pasos.',
          },
          {
            src: '/images/projects/associates-realty/chat.webp',
            width: 1200,
            height: 500,
            alt: 'Revisión de propiedad en cuatro preguntas.',
          },
          {
            src: '/images/projects/associates-realty/contact.webp',
            width: 1200,
            height: 581,
            alt: 'Página de contacto con formulario y vías de contacto directo.',
          },
        ],
      },
      {
        name: 'We Insure Downtown Miami',
        summary: 'Sitio de una agencia de seguros independiente de Brickell, Miami.',
        problem:
          'La agencia necesitaba que un visitante pudiera pedir una cotización en pocos pasos, en ' +
          'su idioma y sin llamar por teléfono.',
        role:
          'Desarrollador. Reconstruí el sitio desde cero para reemplazar la página anterior, ' +
          'armada con el editor visual de un CRM.',
        features: [
          'Cotización guiada por pasos según el tipo de cobertura',
          'Páginas por cobertura',
          'Sitio en inglés, español e italiano',
          'Blog',
          'Preguntas frecuentes',
          'Enlace al portal de clientes',
        ],
        stack: ['JavaScript', 'Vercel', 'Railway', 'APIs REST'],
        challenge:
          'Migrar una página hecha en un editor visual tipo Canva a un sitio desarrollado ' +
          'completamente desde cero, sin perder contenido ni funciones.',
        url: 'https://weinsure-miami.com/',
        status: 'Terminado en agosto de 2026.',
        image: {
          src: '/images/projects/we-insure/hero.webp',
          width: 1200,
          height: 380,
          alt: 'Captura de la página de inicio de We Insure Downtown Miami',
        },
        gallery: [
          {
            src: '/images/projects/we-insure/quote.webp',
            width: 1200,
            height: 574,
            alt: 'Formulario de cotización por pasos según el tipo de cobertura (en la imagen, auto).',
          },
          {
            src: '/images/projects/we-insure/blog.webp',
            width: 1200,
            height: 514,
            alt: 'Blog con artículos sobre seguros en Florida, ordenados por tema.',
          },
        ],
      },
    ],
  },
  contact: {
    title: 'Contacto',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    emailLabel: 'Email',
  },
};
