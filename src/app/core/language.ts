/** Idiomas que tiene el sitio. Cada uno tiene su propia URL: /es y /en. */
export type Lang = 'es' | 'en';

/** Idioma al que se redirige cuando la URL no indica uno válido. */
export const DEFAULT_LANG: Lang = 'es';
