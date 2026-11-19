import { DOCUMENT, Injectable, afterNextRender, computed, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

/** Clave en localStorage. Tiene que coincidir con la del script de src/index.html. */
export const THEME_STORAGE_KEY = 'theme';

/**
 * Maneja el modo claro/oscuro.
 *
 * El tema inicial NO lo decide este servicio: lo decide el script del <head> de index.html,
 * antes de que se dibuje la página (así no parpadea). Este servicio solo lee lo que ese
 * script dejó en <html data-theme="..."> y se encarga de los cambios posteriores.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  /**
   * Empieza en 'light' tanto al prerenderizar como en el navegador: así el HTML que arma
   * Angular al arrancar coincide con el prerenderizado (hidratación sin errores).
   * Después de la primera renderización se corrige con el valor real.
   */
  private readonly theme = signal<Theme>('light');

  readonly isDark = computed(() => this.theme() === 'dark');

  constructor() {
    // afterNextRender solo corre en el navegador. Al prerenderizar no existen
    // window ni localStorage, así que todo lo que los usa va acá adentro.
    afterNextRender(() => {
      const root = this.document.documentElement;
      this.theme.set(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

      // Si el usuario nunca eligió, seguir los cambios del sistema mientras la página está abierta.
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      media.addEventListener('change', (event) => {
        if (this.readSaved() === null) {
          this.apply(event.matches ? 'dark' : 'light');
        }
      });
    });
  }

  /** Cambia al otro tema y recuerda la elección. */
  toggle(): void {
    const next: Theme = this.isDark() ? 'light' : 'dark';
    this.apply(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Almacenamiento bloqueado (por ejemplo, modo privado): el cambio vale solo para esta visita.
    }
  }

  private apply(theme: Theme): void {
    this.document.documentElement.setAttribute('data-theme', theme);
    this.theme.set(theme);
    this.applyThemeColor(theme);
  }

  /**
   * Color de la barra del navegador en el celular. En index.html hay un <meta name="theme-color">
   * por tema (data-scheme="light" / "dark"). Se deja activo solo el del tema elegido:
   * media="all" lo aplica siempre y media="not all" lo desactiva. Así no se repiten los colores
   * acá: siguen definidos una sola vez, en index.html.
   */
  private applyThemeColor(theme: Theme): void {
    const metas = this.document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]');
    metas.forEach((meta) => {
      meta.setAttribute('media', meta.dataset['scheme'] === theme ? 'all' : 'not all');
    });
  }

  private readSaved(): Theme | null {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      return saved === 'light' || saved === 'dark' ? saved : null;
    } catch {
      return null;
    }
  }
}
