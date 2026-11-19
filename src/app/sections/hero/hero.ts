import { Component, input } from '@angular/core';
import { SiteContent } from '../../content/content.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
})
export class Hero {
  readonly content = input.required<SiteContent['hero']>();
}
