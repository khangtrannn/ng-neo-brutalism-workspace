import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbButton, NbMarquee, NbMarqueeItem } from '@ng-neo-brutalism/ui';

import { DocsCodeBlockComponent } from '../../docs/docs-code-block.component';
import { DocsExampleComponent } from '../../docs/docs-example.component';

@Component({
  selector: 'docs-marquee-page',
  standalone: true,
  imports: [
    DocsCodeBlockComponent,
    DocsExampleComponent,
    NbButton,
    NbMarquee,
    NbMarqueeItem,
  ],
  template: `
    <article>
      <header id="overview" class="mb-8 scroll-mt-32">
        <div class="mb-4">
          <p class="mb-2 text-sm font-bold uppercase tracking-wide">
            Components
          </p>
          <h1 class="text-4xl font-black tracking-tight">Marquee</h1>
          <p class="mt-2 max-w-3xl text-base font-medium sm:text-lg">
            A horizontally scrolling component that loops its content
            infinitely. Supports configurable speed, reverse direction, and
            pause on hover.
          </p>
        </div>

        <a
          nbButton
          size="sm"
          variant="neutral"
          href="https://github.com/khangtrannn/ng-neo-brutalism-workspace/tree/main/libs/ui/src/lib/marquee"
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
      </header>

      <section id="preview">
        <h2 class="mt-10 mb-4 text-2xl font-bold">Preview</h2>
        <docs-example [code]="defaultExampleCode">
          <neo-marquee class="w-full" duration="10s">
            <neo-marquee-item>Angular</neo-marquee-item>
            <neo-marquee-item>TypeScript</neo-marquee-item>
            <neo-marquee-item>Tailwind CSS</neo-marquee-item>
            <neo-marquee-item>Vite</neo-marquee-item>
            <neo-marquee-item>Vitest</neo-marquee-item>
          </neo-marquee>
        </docs-example>
      </section>

      <section id="usage">
        <h2 class="mt-10 mb-4 text-2xl font-bold">Usage</h2>
        <docs-code-block
          class="block mb-5"
          title="Import"
          [code]="importCode"
        />
        <docs-code-block title="Template" [code]="defaultExampleCode" />
      </section>

      <section id="reverse">
        <h2 class="mt-10 mb-4 text-2xl font-bold">Reverse</h2>
        <docs-example [code]="reverseExampleCode">
          <neo-marquee class="w-full" duration="10s" [reverse]="true">
            <neo-marquee-item>Angular</neo-marquee-item>
            <neo-marquee-item>TypeScript</neo-marquee-item>
            <neo-marquee-item>Tailwind CSS</neo-marquee-item>
            <neo-marquee-item>Vite</neo-marquee-item>
            <neo-marquee-item>Vitest</neo-marquee-item>
          </neo-marquee>
        </docs-example>
      </section>

      <section id="custom-speed">
        <h2 class="mt-10 mb-4 text-2xl font-bold">Custom speed</h2>
        <docs-example [code]="customSpeedExampleCode">
          <neo-marquee class="w-full" duration="18s">
            <neo-marquee-item>Angular</neo-marquee-item>
            <neo-marquee-item>TypeScript</neo-marquee-item>
            <neo-marquee-item>Tailwind CSS</neo-marquee-item>
            <neo-marquee-item>Vite</neo-marquee-item>
            <neo-marquee-item>Vitest</neo-marquee-item>
          </neo-marquee>
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
                <th class="border-b-2 border-(--nb-border) px-4 py-3 font-bold">
                  Default
                </th>
              </tr>
            </thead>
            <tbody class="font-medium">
              <tr>
                <td
                  class="border-b-2 border-r-2 border-(--nb-border) px-4 py-3"
                >
                  duration
                </td>
                <td
                  class="border-b-2 border-r-2 border-(--nb-border) px-4 py-3 font-mono text-sm"
                >
                  string
                </td>
                <td
                  class="border-b-2 border-(--nb-border) px-4 py-3 font-mono text-sm"
                >
                  '5s'
                </td>
              </tr>
              <tr>
                <td
                  class="border-b-2 border-r-2 border-(--nb-border) px-4 py-3"
                >
                  reverse
                </td>
                <td
                  class="border-b-2 border-r-2 border-(--nb-border) px-4 py-3 font-mono text-sm"
                >
                  boolean
                </td>
                <td
                  class="border-b-2 border-(--nb-border) px-4 py-3 font-mono text-sm"
                >
                  false
                </td>
              </tr>
              <tr>
                <td class="border-r-2 border-(--nb-border) px-4 py-3">
                  pauseOnHover
                </td>
                <td
                  class="border-r-2 border-(--nb-border) px-4 py-3 font-mono text-sm"
                >
                  boolean
                </td>
                <td class="px-4 py-3 font-mono text-sm">true</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MarqueePageComponent {
  protected readonly importCode = `import { NbMarquee, NbMarqueeItem } from '@ng-neo-brutalism/ui';`;

  protected readonly defaultExampleCode = `<neo-marquee class="w-full" duration="10s">
  <neo-marquee-item>Angular</neo-marquee-item>
  <neo-marquee-item>TypeScript</neo-marquee-item>
  <neo-marquee-item>Tailwind CSS</neo-marquee-item>
  <neo-marquee-item>Vite</neo-marquee-item>
  <neo-marquee-item>Vitest</neo-marquee-item>
</neo-marquee>`;

  protected readonly reverseExampleCode = `<neo-marquee class="w-full" duration="10s" [reverse]="true">
  <neo-marquee-item>Angular</neo-marquee-item>
  <neo-marquee-item>TypeScript</neo-marquee-item>
  <neo-marquee-item>Tailwind CSS</neo-marquee-item>
  <neo-marquee-item>Vite</neo-marquee-item>
  <neo-marquee-item>Vitest</neo-marquee-item>
</neo-marquee>`;

  protected readonly customSpeedExampleCode = `<neo-marquee class="w-full" duration="18s">
  <neo-marquee-item>Angular</neo-marquee-item>
  <neo-marquee-item>TypeScript</neo-marquee-item>
  <neo-marquee-item>Tailwind CSS</neo-marquee-item>
  <neo-marquee-item>Vite</neo-marquee-item>
  <neo-marquee-item>Vitest</neo-marquee-item>
</neo-marquee>`;
}
