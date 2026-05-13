import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NbButton } from "@ng-neo-brutalism/ui";

@Component({
  selector: 'nb-docs-navbar',
  standalone: true,
  imports: [RouterLink, NbButton],
  template: `
    <nav
      class="fixed inset-x-0 top-0 z-50 border-b-2 border-(--nb-border) bg-(--nb-secondary-background)"
      aria-label="Main navigation"
    >
      <div class="flex h-14 items-center justify-between gap-4 px-4">
        <a
          routerLink="/"
          class="flex items-center gap-2 font-bold"
          aria-label="Ng Neo Brutalism home"
        >
          <span
            class="flex h-8 min-w-8 items-center justify-center border-2 border-(--nb-border) px-2 text-lg leading-none"
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
          <a
            class="text-sm font-bold"
            nbButton
            variant="neutral"
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
