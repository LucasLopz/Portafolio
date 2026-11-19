import { Component, input } from '@angular/core';
import { SiteContent } from '../../content/content.model';
import { LINKS } from '../../content/links';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
})
export class Contact {
  readonly content = input.required<SiteContent['contact']>();
  protected readonly links = LINKS;
}
