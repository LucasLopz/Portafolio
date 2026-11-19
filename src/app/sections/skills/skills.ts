import { Component, input } from '@angular/core';
import { SiteContent } from '../../content/content.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
})
export class Skills {
  readonly content = input.required<SiteContent['skills']>();
}
