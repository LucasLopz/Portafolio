import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteContent } from '../../content/content.model';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
})
export class Hero {
  readonly content = input.required<SiteContent['hero']>();
}
