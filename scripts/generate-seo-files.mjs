/**
 * Genera sitemap.xml y robots.txt dentro del build (dist/portfolio/browser).
 *
 * Corre solo después de "npm run build", porque en package.json está como "postbuild":
 * npm ejecuta automáticamente un script "post<nombre>" después de "<nombre>".
 * Así también corre en Vercel, que construye el sitio con "npm run build".
 *
 * El dominio sale de src/app/core/site.json, el mismo archivo que usa Angular:
 * si cambia el dominio, se cambia en un solo lugar.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const { url: siteUrl } = JSON.parse(readFileSync(join(root, 'src/app/core/site.json'), 'utf8'));
const outDir = join(root, 'dist/portfolio/browser');

/** Idiomas del sitio; el primero es el de x-default (idioma por defecto). */
const langs = ['es', 'en'];

// ---------- sitemap.xml ----------
// Una entrada por idioma. Cada una lista también sus versiones en los otros idiomas
// (xhtml:link), igual que los hreflang del <head>. No lleva <lastmod>: la fecha del build
// no indica que el contenido haya cambiado, y Google ignora fechas poco confiables.
const alternates = [
  ...langs.map((lang) => ({ hreflang: lang, href: `${siteUrl}/${lang}` })),
  { hreflang: 'x-default', href: `${siteUrl}/${langs[0]}` },
]
  .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`)
  .join('\n');

const urls = langs
  .map((lang) => `  <url>\n    <loc>${siteUrl}/${lang}</loc>\n${alternates}\n  </url>`)
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

// ---------- robots.txt ----------
// Permite rastrear todo el sitio e indica dónde está el sitemap (con URL absoluta).
const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

writeFileSync(join(outDir, 'sitemap.xml'), sitemap);
writeFileSync(join(outDir, 'robots.txt'), robots);
console.log(`sitemap.xml y robots.txt generados para ${siteUrl}`);
