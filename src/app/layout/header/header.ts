import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteContent } from '../../content/content.model';
import { Lang } from '../../core/language';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
})
export class Header {
  readonly lang = input.required<Lang>();
  readonly content = input.required<SiteContent>();

  /** El idioma al que lleva el botón: si estoy en /es, lleva a /en, y al revés. */
  protected readonly otherLang = computed<Lang>(() => (this.lang() === 'es' ? 'en' : 'es'));
}
