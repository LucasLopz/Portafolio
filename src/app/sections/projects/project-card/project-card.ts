import { Component, input } from '@angular/core';
import { Project, ProjectLabels } from '../../../content/content.model';
import { Lightbox } from '../../../shared/lightbox/lightbox';

@Component({
  selector: 'app-project-card',
  imports: [Lightbox],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly labels = input.required<ProjectLabels>();
}
