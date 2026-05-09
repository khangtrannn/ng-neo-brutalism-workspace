import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

import { DocsCodeBlockComponent } from './docs-code-block.component';

type DocsExampleTab = 'preview' | 'code';

@Component({
  selector: 'docs-example',
  standalone: true,
  imports: [DocsCodeBlockComponent],
  template: `
    <div class="shadow-[4px_4px_0_0_var(--nb-shadow)]">
      <!-- Tab bar: border on top/left/right only, no bottom border -->
      <div
        class="grid grid-cols-2 border-2 border-b-0 border-(--nb-border) bg-(--nb-secondary-background)"
      >
        <button
          type="button"
          class="h-10 sm:h-12 text-sm sm:text-base font-bold border-r-2 border-(--nb-border) transition-colors"
          [class.bg-(--nb-main)]="activeTab() === 'preview'"
          [class.text-(--nb-main-foreground)]="activeTab() === 'preview'"
          (click)="activeTab.set('preview')"
        >
          Preview
        </button>
        <button
          type="button"
          class="h-10 sm:h-12 text-sm sm:text-base font-bold transition-colors"
          [class.bg-(--nb-main)]="activeTab() === 'code'"
          [class.text-(--nb-main-foreground)]="activeTab() === 'code'"
          (click)="activeTab.set('code')"
        >
          Code
        </button>
      </div>

      <!-- Content box: border on all sides, no shadow (shadow is on outer wrapper) -->
      <div class="border-2 border-(--nb-border)">
        @if (activeTab() === 'preview') {
          <div
            class="docs-preview-grid flex min-h-[200px] items-center justify-center px-5 py-10 sm:px-10 sm:py-20"
          >
            <ng-content />
          </div>
        } @else {
          <docs-code-block variant="embedded" [code]="code()" />
        }
      </div>
    </div>
  `,
  styles: [
    `
      .docs-preview-grid {
        background-color: var(--nb-surface);
        background-image: linear-gradient(
            rgba(128, 128, 128, 0.3) 1px,
            transparent 1px
          ),
          linear-gradient(90deg, rgba(128, 128, 128, 0.3) 1px, transparent 1px);
        background-size: 40px 40px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsExampleComponent {
  readonly code = input.required<string>();
  protected readonly activeTab = signal<DocsExampleTab>('preview');
}
