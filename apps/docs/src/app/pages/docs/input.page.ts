import { ChangeDetectionStrategy, Component } from '@angular/core';

import InputPageComponent from '../components/input.page';

@Component({
  selector: 'docs-input-route-page',
  standalone: true,
  imports: [InputPageComponent],
  template: `<docs-input-page />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DocsInputRoutePageComponent {}
