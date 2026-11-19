import { SiteContent } from './content.model';

/** Textos en inglés, traducidos de es.ts. Pendiente de revisión por Lucas. */
export const EN: SiteContent = {
  header: {
    navLabel: 'Sections',
    switchLabel: 'Español',
    switchAriaLabel: 'View the site in Spanish',
  },
  hero: {
    name: 'Lucas Lopez Saaied',
    role: 'Junior Full Stack Developer',
    tagline: 'Associate Degree in Programming (UTN), looking for my first role in IT.',
    cvLabel: 'Download CV',
    cvFile: '/cv/cv-en.pdf',
  },
  about: {
    title: 'About me',
    text:
      'I hold an Associate Degree in Programming from UTN. I build web applications with Java, ' +
      'JavaScript, Angular, HTML and CSS, using MySQL databases and version control on GitHub. ' +
      'I have already shipped real websites that are in use today. I am currently training in QA ' +
      'and looking for my first role as a Full Stack Developer or in related IT positions.',
  },
  skills: {
    title: 'Skills',
    groups: [
      { name: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Angular'] },
      { name: 'Backend', items: ['Java'] },
      { name: 'Data', items: ['MySQL'] },
      { name: 'Tools', items: ['Git and GitHub', 'Vercel', 'Railway', 'Claude Code'] },
      { name: 'Fundamentals', items: ['C'] },
    ],
    nextGoalsTitle: 'Next goals',
    nextGoals: ['TypeScript', 'Automated testing with Playwright', 'Spring Boot', 'Docker', 'AWS'],
  },
  projects: {
    title: 'Projects',
    labels: {
      problem: 'Problem',
      role: 'My role',
      features: 'Features',
      stack: 'Stack',
      challenge: 'Biggest challenge',
      visit: 'Visit site',
    },
    items: [
      {
        name: 'Associates Realty',
        summary:
          'Website for a network of real estate services in Miami for foreign investors and ' +
          'remote property owners.',
        problem:
          'The business needed a page that would attract clients, with a look that fits the real ' +
          'estate industry.',
        role:
          'I improved the existing site: I added calls to action, forms, lead capture and direct ' +
          'contact channels.',
        features: [
          'Site in English, Spanish and Italian',
          'Four-question property review',
          'Multi-step contact form',
          'Service pages',
          'FAQ',
        ],
        stack: ['TypeScript', 'Vercel', 'Railway', 'REST APIs'],
        challenge:
          'Understanding the needs of a client in an industry I did not know, and writing the ' +
          'content in English while taking care of SEO and AEO.',
        url: 'https://associates-realty.net/',
        status: 'Completed in August 2026.',
      },
      {
        name: 'We Insure Downtown Miami',
        summary: 'Website for an independent insurance agency in Brickell, Miami.',
        problem:
          'The agency needed visitors to be able to request a quote in a few steps, in their own ' +
          'language and without calling.',
        role:
          'Developer. I rebuilt the site from scratch to replace the previous page, which had ' +
          "been built with a CRM's visual editor.",
        features: [
          'Three-step quote by coverage type',
          'Coverage pages',
          'Site in English, Spanish and Italian',
          'Blog',
          'FAQ',
          'Link to the client portal',
        ],
        stack: ['JavaScript', 'Vercel', 'Railway', 'REST APIs'],
        challenge:
          'Migrating a page made in a Canva-style visual editor to a site built entirely from ' +
          'scratch, without losing any content or features.',
        url: 'https://weinsure-miami.com/',
        status: 'Completed in August 2026.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    emailLabel: 'Email',
  },
};
