import site from './site.json';

/**
 * Dominio del sitio, sin barra final. Se define una sola vez, en site.json, porque lo usan
 * dos cosas: Angular (para las URLs absolutas del <head>) y el script que genera el
 * sitemap y robots.txt. Un JSON lo pueden leer los dos; un archivo .ts, solo Angular.
 */
export const SITE_URL: string = site.url;

/** Convierte una ruta del sitio ("/es", "/images/og-es.jpg") en URL absoluta. */
export function absoluteUrl(path: string): string {
  return SITE_URL + path;
}
