import { Component, DOCUMENT, computed, effect, inject, input } from '@angular/core';
import { CONTENT } from '../../content';
import { Lang } from '../../core/language';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
})
export class Home {
  /** Llega desde "data" de la ruta (/es o /en) gracias a withComponentInputBinding. */
  readonly lang = input.required<Lang>();

  /** Los textos del idioma actual. Se recalcula solo si cambia "lang". */
  protected readonly content = computed(() => CONTENT[this.lang()]);

  constructor() {
    // DOCUMENT funciona también al prerenderizar, donde no existe "window".
    const document = inject(DOCUMENT);
    // Actualiza <html lang="..."> para lectores de pantalla y buscadores.
    effect(() => {
      document.documentElement.lang = this.lang();
    });
  }
}
