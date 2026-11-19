import { CONTENT } from '../content';
import { LINKS } from '../content/links';
import { Lang } from './language';
import { SITE_URL, absoluteUrl } from './site';

/**
 * Datos estructurados (JSON-LD) con el vocabulario de schema.org.
 *
 * Le dicen a buscadores y asistentes de IA, sin que tengan que interpretar el diseño,
 * que esta página es el perfil (ProfilePage) de una persona (Person) y cuáles son sus datos.
 * Todo sale de los mismos textos del sitio (es.ts / en.ts) y de docs/contenido.md.
 */
export function buildProfilePage(lang: Lang): object {
  const content = CONTENT[lang];
  const pageUrl = absoluteUrl(`/${lang}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: pageUrl,
    name: content.seo.title,
    inLanguage: lang,
    mainEntity: {
      '@type': 'Person',
      // @id: identificador único de la persona. Es el mismo en /es y /en, así los
      // buscadores entienden que las dos páginas hablan de la misma persona.
      '@id': `${SITE_URL}/#person`,
      name: content.hero.name,
      jobTitle: content.hero.role,
      description: content.seo.description,
      image: absoluteUrl('/images/lucas.jpg'),
      url: pageUrl,
      sameAs: [LINKS.linkedin, LINKS.github],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Universidad Tecnológica Nacional (UTN)',
      },
      // Todas las habilidades de la sección "Habilidades", en una sola lista.
      knowsAbout: content.skills.groups.flatMap((group) => group.items),
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mar del Plata',
        addressCountry: 'AR',
      },
    },
  };
}
