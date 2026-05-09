import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NbDocsLayoutComponent } from '../docs/layout/docs-layout.component';

@Component({
  selector: 'components-layout-page',
  standalone: true,
  imports: [NbDocsLayoutComponent],
  template: `<nb-docs-layout />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ComponentsLayoutPageComponent {}
