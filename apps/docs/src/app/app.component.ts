import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DocsShellComponent } from './docs/docs-shell.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DocsShellComponent, RouterOutlet],
  template: `
    <docs-shell>
      <router-outlet />
    </docs-shell>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
