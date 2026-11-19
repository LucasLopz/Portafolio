import { Component, input } from '@angular/core';
import { SiteContent } from '../../content/content.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
})
export class About {
  readonly content = input.required<SiteContent['about']>();
}
