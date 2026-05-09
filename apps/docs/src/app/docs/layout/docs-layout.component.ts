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
    <div class="min-h-screen bg-[var(--nb-secondary-background)]">
      <nb-docs-navbar />

      <div class="flex pt-14">
        <nb-docs-sidebar class="shrink-0" />

        <main
          data-docs-content
          class="docs-grid-bg min-h-[calc(100vh-3.5rem)] flex-1 px-5 py-10 lg:ml-60 lg:mr-44 lg:px-8"
        >
          <div class="mx-auto min-h-full w-full max-w-3xl">
            <router-outlet />
            <nb-docs-pagination />
          </div>
        </main>

        <aside
          class="fixed right-0 top-14 hidden h-[calc(100vh-3.5rem)] w-44 shrink-0 overflow-y-auto border-l-2 border-[var(--nb-border)] bg-[var(--nb-secondary-background)] pt-10 pr-4 pl-4 lg:block"
        >
          <nb-docs-toc />
        </aside>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbDocsLayoutComponent {}
