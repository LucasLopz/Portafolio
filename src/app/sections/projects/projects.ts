import { Component, input } from '@angular/core';
import { SiteContent } from '../../content/content.model';
import { ProjectCard } from './project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
})
export class Projects {
  readonly content = input.required<SiteContent['projects']>();
}
