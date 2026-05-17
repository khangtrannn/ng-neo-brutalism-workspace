import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NbDocsNavbarComponent } from './navbar.component';
import { NbDocsPaginationComponent } from './pagination.component';
import { NbDocsSidebarComponent } from './sidebar.component';
import { NbDocsTocComponent } from './toc.component';

@Component({
  selector: 'nb-docs-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NbDocsNavbarComponent,
    NbDocsSidebarComponent,
    NbDocsTocComponent,
    NbDocsPaginationComponent,
  ],
  template: `
    <div class="relative min-h-screen overflow-x-clip">
      <!-- Decorative floating shapes -->
      <span
        aria-hidden="true"
        class="pointer-events-none fixed top-40 left-2 hidden h-14 w-14 rotate-12 border-4 border-(--nb-border) bg-(--nb-pink) shadow-[5px_5px_0_0_var(--nb-shadow)] xl:block"
      ></span>
      <span
        aria-hidden="true"
        class="pointer-events-none fixed bottom-12 right-4 hidden h-10 w-10 -rotate-12 rounded-full border-4 border-(--nb-border) bg-(--nb-lavender) shadow-[4px_4px_0_0_var(--nb-shadow)] xl:block"
      ></span>

      <nb-docs-navbar />

      <div class="flex pt-32">
        <nb-docs-sidebar class="shrink-0" />

        <main
          data-docs-content
          class="docs-grid-bg min-h-[calc(100vh-8rem)] flex-1 px-5 py-12 lg:ml-80 lg:mr-52 lg:px-8"
        >
          <div class="mx-auto min-h-full w-full max-w-3xl">
            <router-outlet />
            <nb-docs-pagination />
          </div>
        </main>

        <aside
          class="fixed top-32 right-8 hidden h-[calc(100vh-9rem)] w-48 shrink-0 overflow-y-auto border-4 border-(--nb-border) bg-(--nb-paper) p-4 shadow-[8px_8px_0_0_var(--nb-shadow)] lg:block"
        >
          <nb-docs-toc />
        </aside>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbDocsLayoutComponent {}
