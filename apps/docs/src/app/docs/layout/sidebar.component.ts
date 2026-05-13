import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { DOC_NAV } from '../nav';

@Component({
  selector: 'nb-docs-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside
      class="fixed left-0 top-14 hidden h-[calc(100vh-3.5rem)] w-60 overflow-y-auto border-r-2 border-(--nb-border) bg-(--nb-secondary-background) lg:block"
      aria-label="Documentation navigation"
    >
        @for (group of nav; track group.label) {
          <div class="px-4 py-3">
            <p class="mb-2 text-xs font-bold uppercase text-gray-500">
              {{ group.label }}
            </p>

            @for (item of group.items; track item.path) {
              <a
                [routerLink]="item.path"
                routerLinkActive="is-active"
                [routerLinkActiveOptions]="{ exact: item.path === '/docs' }"
                class="relative z-10 block px-3 py-1.5 text-sm hover:font-bold [&.is-active]:font-bold"
              >
                {{ item.label }}
              </a>
            }
          </div>
        }
    </aside>
  `,
  styles: `
    .is-active {
      pointer-events: none;
      border: 2px solid var(--nb-border);
      background-color: var(--nb-main);
      box-shadow: 4px 4px 0 0 var(--nb-shadow);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbDocsSidebarComponent {
  protected readonly nav = DOC_NAV;
}
