import { ChangeDetectionStrategy, Component } from '@angular/core';

import ButtonPageComponent from '../components/button.page';

@Component({
  selector: 'docs-button-route-page',
  standalone: true,
  imports: [ButtonPageComponent],
  template: `<docs-button-page />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DocsButtonRoutePageComponent {}
