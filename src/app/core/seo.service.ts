import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CONTENT } from '../content';
import { Lang } from './language';
import { absoluteUrl } from './site';
import { buildProfilePage } from './structured-data';

/** Medidas de las imágenes para compartir (public/images/og-*.jpg). */
const OG_IMAGE = { width: '1200', height: '630', type: 'image/jpeg' };

/**
 * Escribe en el <head> todo lo que leen buscadores y redes sociales, según el idioma.
 *
 * Se llama al prerenderizar cada ruta, así es/index.html y en/index.html salen del build
 * con sus etiquetas ya escritas: los robots no necesitan ejecutar JavaScript para verlas.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  update(lang: Lang): void {
    const { seo } = CONTENT[lang];
    const otherLang: Lang = lang === 'es' ? 'en' : 'es';
    const url = absoluteUrl(`/${lang}`);
    const image = absoluteUrl(seo.ogImage);

    // Idioma del documento: lectores de pantalla y buscadores.
    this.document.documentElement.lang = lang;

    // ---------- Título y descripción ----------
    this.title.setTitle(seo.title);
    this.setName('description', seo.description);

    // ---------- Open Graph (LinkedIn, WhatsApp, Facebook y otros al compartir) ----------
    this.setProperty('og:type', 'website');
    this.setProperty('og:site_name', CONTENT[lang].hero.name);
    this.setProperty('og:title', seo.title);
    this.setProperty('og:description', seo.description);
    this.setProperty('og:url', url);
    this.setProperty('og:locale', seo.ogLocale);
    this.setProperty('og:locale:alternate', CONTENT[otherLang].seo.ogLocale);
    this.setProperty('og:image', image);
    this.setProperty('og:image:width', OG_IMAGE.width);
    this.setProperty('og:image:height', OG_IMAGE.height);
    this.setProperty('og:image:type', OG_IMAGE.type);
    this.setProperty('og:image:alt', seo.ogImageAlt);

    // ---------- Twitter / X: tarjeta con imagen grande ----------
    this.setName('twitter:card', 'summary_large_image');
    this.setName('twitter:title', seo.title);
    this.setName('twitter:description', seo.description);
    this.setName('twitter:image', image);
    this.setName('twitter:image:alt', seo.ogImageAlt);

    // ---------- Enlaces ----------
    // canonical: la URL "oficial" de esta página, para que los buscadores no la dupliquen.
    // alternate + hreflang: la misma página en otro idioma; x-default es la que se muestra
    // cuando el idioma del visitante no es ninguno de los dos (español, el idioma por defecto).
    this.setLinks([
      { rel: 'canonical', href: url },
      { rel: 'alternate', hreflang: 'es', href: absoluteUrl('/es') },
      { rel: 'alternate', hreflang: 'en', href: absoluteUrl('/en') },
      { rel: 'alternate', hreflang: 'x-default', href: absoluteUrl('/es') },
    ]);

    // ---------- Datos estructurados (JSON-LD) ----------
    this.setJsonLd(buildProfilePage(lang));
  }

  /**
   * <script type="application/ld+json">: el formato que recomienda Google para datos
   * estructurados. El navegador no lo ejecuta; solo lo leen buscadores y asistentes.
   */
  private setJsonLd(data: object): void {
    const head = this.document.head;
    head.querySelector('script[type="application/ld+json"][data-seo]')?.remove();
    const script = this.document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-seo', '');
    // "<" se escribe como <: así ningún texto puede cerrar el <script> antes de tiempo.
    script.textContent = JSON.stringify(data).replace(/</g, '\\u003c');
    head.appendChild(script);
  }

  /** <meta name="..." content="...">: crea la etiqueta o actualiza la que ya existe. */
  private setName(name: string, content: string): void {
    this.meta.updateTag({ name, content }, `name="${name}"`);
  }

  /** <meta property="..." content="...">: el formato que usa Open Graph. */
  private setProperty(property: string, content: string): void {
    this.meta.updateTag({ property, content }, `property="${property}"`);
  }

  /**
   * Reemplaza los <link> de SEO. Se marcan con data-seo para borrar solo los propios
   * (no los íconos ni la fuente) y no duplicarlos al cambiar de idioma en el navegador.
   */
  private setLinks(links: { rel: string; href: string; hreflang?: string }[]): void {
    const head = this.document.head;
    head.querySelectorAll('link[data-seo]').forEach((link) => link.remove());
    for (const { rel, href, hreflang } of links) {
      const link = this.document.createElement('link');
      link.setAttribute('rel', rel);
      if (hreflang) {
        link.setAttribute('hreflang', hreflang);
      }
      link.setAttribute('href', href);
      link.setAttribute('data-seo', '');
      head.appendChild(link);
    }
  }
}
