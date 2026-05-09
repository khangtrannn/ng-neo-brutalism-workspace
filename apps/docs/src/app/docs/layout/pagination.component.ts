import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { NbButton } from '@ng-neo-brutalism/ui';
import { filter, map, startWith } from 'rxjs';

import { DOC_NAV } from '../nav';

@Component({
  selector: 'nb-docs-pagination',
  standalone: true,
  imports: [RouterLink, NbButton],
  template: `
    <div class="mt-16 flex justify-between border-t-2 border-[var(--nb-border)] pt-6">
      @if (prev()) {
        <a [routerLink]="prev()!.path" nbButton variant="neutral">
          ← {{ prev()!.label }}
        </a>
      } @else {
        <span></span>
      }

      @if (next()) {
        <a [routerLink]="next()!.path" nbButton variant="default">
          {{ next()!.label }} →
        </a>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbDocsPaginationComponent {
  private readonly router = inject(Router);

  private readonly allItems = computed(() => DOC_NAV.flatMap((group) => group.items));

  private readonly currentPath = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects.split(/[?#]/, 1)[0] || '/'),
      startWith(this.router.url.split(/[?#]/, 1)[0] || '/')
    ),
    { initialValue: this.router.url.split(/[?#]/, 1)[0] || '/' }
  );

  protected readonly prev = computed(() => {
    const items = this.allItems();
    const index = items.findIndex((item) => item.path === this.currentPath());

    return index > 0 ? items[index - 1] : null;
  });

  protected readonly next = computed(() => {
    const items = this.allItems();
    const index = items.findIndex((item) => item.path === this.currentPath());

    return index >= 0 && index < items.length - 1 ? items[index + 1] : null;
  });
}
