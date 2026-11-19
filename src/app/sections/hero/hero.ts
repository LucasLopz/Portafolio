import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteContent } from '../../content/content.model';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly content = input.required<SiteContent['hero']>();

  /** La foto es la misma en los dos idiomas; solo cambia el texto alternativo. */
  protected readonly photo = { src: '/images/lucas.jpg', width: 406, height: 462 };
}
