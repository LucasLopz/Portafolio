import { Component, input } from '@angular/core';
import { LINKS } from '../../content/links';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly name = input.required<string>();
  protected readonly links = LINKS;
}
