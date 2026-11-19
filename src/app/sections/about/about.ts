import { Component, input } from '@angular/core';
import { SiteContent } from '../../content/content.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly content = input.required<SiteContent['about']>();
}
