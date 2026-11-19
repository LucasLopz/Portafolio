import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteContent } from '../../content/content.model';
import { Lang } from '../../core/language';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly lang = input.required<Lang>();
  readonly content = input.required<SiteContent>();

  protected readonly theme = inject(ThemeService);

  /** El idioma al que lleva el botón: si estoy en /es, lleva a /en, y al revés. */
  protected readonly otherLang = computed<Lang>(() => (this.lang() === 'es' ? 'en' : 'es'));
}
