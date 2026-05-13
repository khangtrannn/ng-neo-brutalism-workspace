import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbButton, NbInput, NbLabel } from '@ng-neo-brutalism/ui';

import { DocsCodeBlockComponent } from '../../docs/docs-code-block.component';
import { DocsExampleComponent } from '../../docs/docs-example.component';

@Component({
  selector: 'docs-input-page',
  standalone: true,
  imports: [DocsCodeBlockComponent, DocsExampleComponent, NbButton, NbInput, NbLabel],
  template: `
    <article>
      <header id="overview" class="mb-8 scroll-mt-32">
        <div class="mb-4">
          <p class="mb-2 text-sm font-bold uppercase tracking-wide">
            Components
          </p>
          <h1 class="text-4xl font-black tracking-tight">Input</h1>
          <p class="mt-2 max-w-3xl text-base font-medium sm:text-lg">
            Displays a form input field with hard borders, offset shadow, and
            strong focus states in the neo-brutalism style.
          </p>
        </div>

        <a
          nbButton
          size="sm"
          variant="neutral"
          href="https://github.com/khangtrannn/ng-neo-brutalism-workspace/tree/main/libs/ui/src/lib/input"
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
      </header>

      <section id="preview">
        <h2 class="mt-10 mb-4 text-2xl font-bold">Preview</h2>
        <docs-example [code]="defaultExampleCode">
          <input nbInput placeholder="Email" class="w-[200px]" />
        </docs-example>
      </section>

      <section id="usage">
        <h2 class="mt-10 mb-4 text-2xl font-bold">Usage</h2>
        <docs-code-block class="block mb-5" title="Import" [code]="importCode" />
        <docs-code-block title="Template" [code]="defaultExampleCode" />
      </section>

      <section id="sizes">
        <h2 class="mt-10 mb-4 text-2xl font-bold">Sizes</h2>
        <docs-example [code]="sizesExampleCode">
          <div class="flex flex-col items-center gap-4">
            <input nbInput size="sm" placeholder="Small" class="w-[200px]" />
            <input nbInput placeholder="Default" class="w-[200px]" />
            <input nbInput size="lg" placeholder="Large" class="w-[200px]" />
          </div>
        </docs-example>
      </section>

      <section id="disabled">
        <h2 class="mt-10 mb-4 text-2xl font-bold">Disabled</h2>
        <docs-example [code]="disabledExampleCode">
          <input nbInput placeholder="Email" class="w-[200px]" disabled />
        </docs-example>
      </section>

      <section id="with-label">
        <h2 class="mt-10 mb-4 text-2xl font-bold">With Label</h2>
        <docs-example [code]="withLabelExampleCode">
          <div class="flex flex-col gap-2">
            <label nbLabel for="email">Email</label>
            <input nbInput id="email" type="email" placeholder="m@example.com" class="w-[200px]" />
          </div>
        </docs-example>
      </section>

      <section id="with-button">
        <h2 class="mt-10 mb-4 text-2xl font-bold">With Button</h2>
        <docs-example [code]="withButtonExampleCode">
          <div class="flex gap-2">
            <input nbInput placeholder="Email" class="w-[200px]" />
            <button nbButton variant="neutral">Subscribe</button>
          </div>
        </docs-example>
      </section>

      <section id="file">
        <h2 class="mt-10 mb-4 text-2xl font-bold">File</h2>
        <docs-example [code]="fileExampleCode">
          <input nbInput type="file" class="w-[250px]" />
        </docs-example>
      </section>

      <section id="api">
        <h2 class="mt-10 mb-4 text-2xl font-bold">API</h2>

        <div
          class="overflow-hidden border-2 border-(--nb-border) bg-nb-surface shadow-[5px_5px_0_0_var(--nb-shadow)]"
        >
          <table class="w-full border-collapse text-left">
            <thead class="bg-nb-secondary text-nb-secondary-fg">
              <tr>
                <th
                  class="border-b-2 border-r-2 border-(--nb-border) px-4 py-3 font-bold"
                >
                  Input
                </th>
                <th
                  class="border-b-2 border-r-2 border-(--nb-border) px-4 py-3 font-bold"
                >
                  Type
                </th>
                <th
                  class="border-b-2 border-(--nb-border) px-4 py-3 font-bold"
                >
                  Default
                </th>
              </tr>
            </thead>
            <tbody class="font-medium">
              <tr>
                <td class="border-r-2 border-(--nb-border) px-4 py-3">
                  size
                </td>
                <td
                  class="border-r-2 border-(--nb-border) px-4 py-3 font-mono text-sm"
                >
                  'default' | 'sm' | 'lg'
                </td>
                <td class="px-4 py-3 font-mono text-sm">'default'</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputPageComponent {
  protected readonly defaultExampleCode = `<input nbInput placeholder="Email" class="w-[200px]" />`;

  protected readonly importCode = `import { NbInput } from '@ng-neo-brutalism/ui';`;

  protected readonly sizesExampleCode = `<input nbInput size="sm" placeholder="Small" class="w-[200px]" />
<input nbInput placeholder="Default" class="w-[200px]" />
<input nbInput size="lg" placeholder="Large" class="w-[200px]" />`;

  protected readonly disabledExampleCode = `<input nbInput placeholder="Email" class="w-[200px]" disabled />`;

  protected readonly withLabelExampleCode = `<div class="flex flex-col gap-2">
  <label nbLabel for="email">Email</label>
  <input nbInput id="email" type="email" placeholder="m@example.com" class="w-[200px]" />
</div>`;

  protected readonly withButtonExampleCode = `<div class="flex gap-2">
  <input nbInput placeholder="Email" class="w-[200px]" />
  <button nbButton variant="neutral">Subscribe</button>
</div>`;

  protected readonly fileExampleCode = `<input nbInput type="file" class="w-[250px]" />`;
}
