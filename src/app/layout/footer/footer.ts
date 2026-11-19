import { Component, input } from '@angular/core';
import { LINKS } from '../../content/links';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  readonly name = input.required<string>();
  protected readonly links = LINKS;
}
