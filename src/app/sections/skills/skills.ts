import { Component, input } from '@angular/core';
import { SiteContent } from '../../content/content.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly content = input.required<SiteContent['skills']>();
}
