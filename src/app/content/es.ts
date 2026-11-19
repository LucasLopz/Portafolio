import { SiteContent } from './content.model';

/** Textos en español. Fuente: docs/contenido.md. */
export const ES: SiteContent = {
  hero: {
    name: 'Lucas Lopez Saaied',
    role: 'Full Stack Developer Jr.',
    tagline: 'Técnico en Programación (UTN), en busca de mi primer puesto en IT.',
  },
  about: {
    title: 'Sobre mí',
    text:
      'Soy Técnico en Programación recibido en la UTN. Desarrollo aplicaciones web con Java, ' +
      'JavaScript, Angular, HTML y CSS, con bases de datos MySQL y control de versiones en GitHub. ' +
      'Ya publiqué sitios reales que hoy están en uso. Actualmente me estoy formando en QA y busco ' +
      'mi primer puesto como Full Stack Developer o en roles afines de IT.',
  },
  skills: {
    title: 'Habilidades',
    groups: [
      { name: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Angular'] },
      { name: 'Backend', items: ['Java'] },
      { name: 'Datos', items: ['MySQL'] },
      { name: 'Herramientas', items: ['Git y GitHub', 'Vercel', 'Railway', 'Claude Code'] },
      { name: 'Fundamentos', items: ['C'] },
    ],
    nextGoalsTitle: 'Próximos objetivos',
    nextGoals: ['TypeScript', 'Testing automatizado con Playwright', 'Spring Boot', 'Docker', 'AWS'],
  },
  projects: {
    title: 'Proyectos',
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
      },
      {
        name: 'We Insure Downtown Miami',
        summary: 'Sitio de una agencia de seguros independiente de Brickell, Miami.',
        problem:
          'La agencia necesitaba que un visitante pudiera pedir una cotización en pocos pasos, en ' +
          'su idioma y sin llamar por teléfono.',
        features: [
          'Cotización en tres pasos por tipo de cobertura',
          'Páginas por cobertura',
          'Sitio en inglés, español e italiano',
          'Blog',
          'Preguntas frecuentes',
          'Enlace al portal de clientes',
        ],
        stack: ['JavaScript', 'Vercel', 'Railway', 'APIs REST'],
        url: 'https://weinsure-miami.com/',
        status: 'Terminado en agosto de 2026.',
      },
    ],
  },
  contact: {
    title: 'Contacto',
    linkedinLabel: 'LinkedIn',
    emailLabel: 'Email',
  },
};
