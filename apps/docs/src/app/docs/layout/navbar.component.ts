import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nb-docs-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav
      class="fixed inset-x-0 top-0 z-50 border-b-2 border-[var(--nb-border)] bg-[var(--nb-secondary-background)]"
      aria-label="Main navigation"
    >
      <div class="flex h-14 items-center justify-between gap-4 px-4">
        <a
          routerLink="/"
          class="flex items-center gap-2 font-bold"
          aria-label="Ng Neo Brutalism home"
        >
          <span
            class="flex h-8 min-w-8 items-center justify-center border-2 border-[var(--nb-border)] px-2 text-lg leading-none"
          >
            N
          </span>
        </a>

        <div class="hidden items-center gap-6 text-sm font-bold lg:flex">
          <a routerLink="/docs">Docs</a>
          <a routerLink="/docs/button">Components</a>
          <a routerLink="/docs/styling">Styling</a>
          <a routerLink="/docs/charts">Charts</a>
          <a routerLink="/docs/stars/installation">Stars</a>
          <a routerLink="/docs/templates">Templates</a>
          <a routerLink="/docs/showcase">Showcase</a>
        </div>

        <div class="flex items-center gap-3">
          <button
            type="button"
            class="border-2 border-[var(--nb-border)] bg-[var(--nb-secondary-background)] px-3 py-1 text-sm font-bold"
            aria-label="Search documentation"
          >
            Search <span class="hidden sm:inline">⌘K</span>
          </button>

          <a
            class="text-sm font-bold"
            href="https://github.com/khangtrannn/ng-neo-brutalism-workspace"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbDocsNavbarComponent {}
