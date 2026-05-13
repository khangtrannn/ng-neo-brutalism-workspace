import { ChangeDetectionStrategy, Component } from '@angular/core';

import CheckboxPageComponent from '../components/checkbox.page';

@Component({
  selector: 'docs-checkbox-route-page',
  standalone: true,
  imports: [CheckboxPageComponent],
  template: `<docs-checkbox-page />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DocsCheckboxRoutePageComponent {}
