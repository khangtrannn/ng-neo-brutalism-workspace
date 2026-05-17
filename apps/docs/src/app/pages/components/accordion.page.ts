import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  NbAccordion,
  NbAccordionContent,
  NbAccordionItem,
  NbAccordionTrigger,
  NbButton,
} from '@ng-neo-brutalism/ui';

import { DocsCodeBlockComponent } from '../../docs/docs-code-block.component';
import { DocsExampleComponent } from '../../docs/docs-example.component';

@Component({
  selector: 'docs-accordion-page',
  standalone: true,
  imports: [
    DocsCodeBlockComponent,
    DocsExampleComponent,
    NbAccordion,
    NbAccordionContent,
    NbAccordionItem,
    NbAccordionTrigger,
    NbButton,
  ],
  template: `
    <article>
      <header id="overview" class="relative mb-10 scroll-mt-32">
        <div class="mb-5">
          <p>Components</p>
          <h1>Accordion</h1>
          <p class="mt-3 max-w-3xl text-base font-medium sm:text-lg">
            A vertically stacked set of interactive headings that reveal related
            content panels with native button semantics, ARIA state, and
            neo-brutalist borders.
          </p>
        </div>

        <div class="mt-7 flex flex-wrap items-center gap-3">
          <div class="nb-stat-tile nb-stat-tile--yellow">
            <span class="nb-stat-tile__value">4</span>
            <span class="nb-stat-tile__label">Parts</span>
          </div>
          <div class="nb-stat-tile nb-stat-tile--mint">
            <span class="nb-stat-tile__value">A11y</span>
            <span class="nb-stat-tile__label">ARIA-ready</span>
          </div>
          <div class="nb-stat-tile nb-stat-tile--pink">
            <span class="nb-stat-tile__value">∞</span>
            <span class="nb-stat-tile__label">Items</span>
          </div>

          <a
            nbButton
            size="sm"
            variant="neutral"
            href="https://github.com/khangtrannn/ng-neo-brutalism-workspace/tree/main/libs/ui/src/lib/accordion"
            target="_blank"
            rel="noreferrer"
          >
            Source ↗
          </a>
        </div>
      </header>

      <section id="preview">
        <h2 class="mt-10 mb-4 text-2xl font-bold">Preview</h2>
        <docs-example [code]="exampleCode">
          <neo-accordion class="block w-full max-w-xl" collapsible>
            <neo-accordion-item>
              <neo-accordion-trigger>Is it accessible?</neo-accordion-trigger>
              <neo-accordion-content>
                Yes. It uses native button semantics and ARIA state.
              </neo-accordion-content>
            </neo-accordion-item>

            <neo-accordion-item>
              <neo-accordion-trigger>
                Is it styled like neobrutalism.dev?
              </neo-accordion-trigger>
              <neo-accordion-content>
                Yes. It keeps the heavy border, offset shadow, bright trigger,
                and rotating chevron from the referenced component.
              </neo-accordion-content>
            </neo-accordion-item>
          </neo-accordion>
        </docs-example>
      </section>

      <section id="usage">
        <h2 class="mt-10 mb-4 text-2xl font-bold">Usage</h2>
        <docs-code-block
          class="block mb-5"
          title="Import"
          [code]="importCode"
        />
        <docs-code-block title="Template" [code]="exampleCode" />
      </section>

      <section id="multiple">
        <h2 class="mt-10 mb-4 text-2xl font-bold">Multiple</h2>
        <docs-example [code]="multipleExampleCode">
          <neo-accordion
            class="block w-full max-w-xl"
            type="multiple"
            [defaultValue]="['item-1']"
          >
            <neo-accordion-item value="item-1">
              <neo-accordion-trigger
                >Can multiple panels open?</neo-accordion-trigger
              >
              <neo-accordion-content>
                Yes. Set <code>type="multiple"</code> to allow independent panel
                state.
              </neo-accordion-content>
            </neo-accordion-item>

            <neo-accordion-item value="item-2">
              <neo-accordion-trigger
                >Can panels start open?</neo-accordion-trigger
              >
              <neo-accordion-content>
                Yes. Use <code>defaultValue</code> for uncontrolled accordions
                or bind <code>value</code> for controlled state.
              </neo-accordion-content>
            </neo-accordion-item>
          </neo-accordion>
        </docs-example>
      </section>

      <section id="controlled">
        <h2 class="mt-10 mb-4 text-2xl font-bold">Controlled</h2>
        <docs-example [code]="controlledExampleCode">
          <div class="flex w-full max-w-xl flex-col gap-4">
            <div class="flex flex-wrap gap-3">
              <button
                nbButton
                size="sm"
                variant="neutral"
                type="button"
                (click)="controlledValue.set('overview')"
              >
                Overview
              </button>
              <button
                nbButton
                size="sm"
                variant="neutral"
                type="button"
                (click)="controlledValue.set('details')"
              >
                Details
              </button>
              <button
                nbButton
                size="sm"
                variant="neutral"
                type="button"
                (click)="controlledValue.set(null)"
              >
                Collapse All
              </button>
            </div>

            <neo-accordion [(value)]="controlledValue">
              <neo-accordion-item value="overview">
                <neo-accordion-trigger>Overview</neo-accordion-trigger>
                <neo-accordion-content>
                  Bind <code>[(value)]</code> when another control should open
                  or close accordion panels. The trigger can switch panels, but
                  only the external button can collapse the active panel.
                </neo-accordion-content>
              </neo-accordion-item>

              <neo-accordion-item value="details">
                <neo-accordion-trigger>Details</neo-accordion-trigger>
                <neo-accordion-content>
                  The value matches the active item in single mode.
                </neo-accordion-content>
              </neo-accordion-item>
            </neo-accordion>
          </div>
        </docs-example>
      </section>

      <section id="disabled">
        <h2 class="mt-10 mb-4 text-2xl font-bold">Disabled Item</h2>
        <docs-example [code]="disabledExampleCode">
          <neo-accordion collapsible class="block w-full max-w-xl" defaultValue="enabled">
            <neo-accordion-item value="enabled">
              <neo-accordion-trigger>Enabled item</neo-accordion-trigger>
              <neo-accordion-content>
                This panel can be opened and closed normally.
              </neo-accordion-content>
            </neo-accordion-item>

            <neo-accordion-item value="disabled" disabled>
              <neo-accordion-trigger>Disabled item</neo-accordion-trigger>
              <neo-accordion-content>
                Disabled triggers cannot be activated.
              </neo-accordion-content>
            </neo-accordion-item>
          </neo-accordion>
        </docs-example>
      </section>

      <section id="api">
        <h2 class="mt-10 mb-4 text-2xl font-bold">API</h2>
        <h3 class="mt-6 mb-3 text-xl font-bold">Accordion</h3>
        <div
          class="overflow-hidden border-2 border-(--nb-border) bg-nb-surface shadow-nb"
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
                  type
                </td>
                <td
                  class="border-b-2 border-r-2 border-(--nb-border) px-4 py-3 font-mono text-sm"
                >
                  'single' | 'multiple'
                </td>
                <td
                  class="border-b-2 border-(--nb-border) px-4 py-3 font-mono text-sm"
                >
                  'single'
                </td>
              </tr>
              <tr>
                <td
                  class="border-b-2 border-r-2 border-(--nb-border) px-4 py-3"
                >
                  collapsible
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
                <td
                  class="border-b-2 border-r-2 border-(--nb-border) px-4 py-3"
                >
                  value
                </td>
                <td
                  class="border-b-2 border-r-2 border-(--nb-border) px-4 py-3 font-mono text-sm"
                >
                  string | string[] | null
                </td>
                <td
                  class="border-b-2 border-(--nb-border) px-4 py-3 font-mono text-sm"
                >
                  null
                </td>
              </tr>
              <tr>
                <td class="border-r-2 border-(--nb-border) px-4 py-3">
                  defaultValue
                </td>
                <td
                  class="border-r-2 border-(--nb-border) px-4 py-3 font-mono text-sm"
                >
                  string | string[] | null
                </td>
                <td class="px-4 py-3 font-mono text-sm">null</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="mt-8 mb-3 text-xl font-bold">Accordion Item</h3>
        <div
          class="overflow-hidden border-2 border-(--nb-border) bg-nb-surface shadow-nb"
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
                  value
                </td>
                <td
                  class="border-b-2 border-r-2 border-(--nb-border) px-4 py-3 font-mono text-sm"
                >
                  string
                </td>
                <td
                  class="border-b-2 border-(--nb-border) px-4 py-3 font-mono text-sm"
                >
                  generated
                </td>
              </tr>
              <tr>
                <td class="border-r-2 border-(--nb-border) px-4 py-3">
                  disabled
                </td>
                <td
                  class="border-r-2 border-(--nb-border) px-4 py-3 font-mono text-sm"
                >
                  boolean
                </td>
                <td class="px-4 py-3 font-mono text-sm">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AccordionPageComponent {
  protected readonly controlledValue = signal<string | string[] | null>(
    'overview'
  );

  protected readonly importCode = `import {
  NbAccordion,
  NbAccordionContent,
  NbAccordionItem,
  NbAccordionTrigger,
} from '@ng-neo-brutalism/ui';`;

  protected readonly exampleCode = `<neo-accordion class="block w-full max-w-xl" collapsible>
  <neo-accordion-item>
    <neo-accordion-trigger>Is it accessible?</neo-accordion-trigger>
    <neo-accordion-content>
      Yes. It uses native button semantics and ARIA state.
    </neo-accordion-content>
  </neo-accordion-item>

  <neo-accordion-item>
    <neo-accordion-trigger>Is it styled like neobrutalism.dev?</neo-accordion-trigger>
    <neo-accordion-content>
      Yes. It keeps the heavy border, offset shadow, bright trigger,
      and rotating chevron from the referenced component.
    </neo-accordion-content>
  </neo-accordion-item>
</neo-accordion>`;

  protected readonly controlledExampleCode = `// component.ts
import { signal } from '@angular/core';

readonly value = signal<string | string[] | null>('overview');

// component.html
<button nbButton (click)="value.set('overview')">Overview</button>
<button nbButton (click)="value.set('details')">Details</button>
<button nbButton (click)="value.set(null)">Close</button>

<neo-accordion [(value)]="value">
  <neo-accordion-item value="overview">
    <neo-accordion-trigger>Overview</neo-accordion-trigger>
    <neo-accordion-content>
      Bind [(value)] when another control should open or close panels.
      Without collapsible, only the external button can collapse the active panel.
    </neo-accordion-content>
  </neo-accordion-item>

  <neo-accordion-item value="details">
    <neo-accordion-trigger>Details</neo-accordion-trigger>
    <neo-accordion-content>
      The value matches the active item in single mode.
    </neo-accordion-content>
  </neo-accordion-item>
</neo-accordion>`;

  protected readonly multipleExampleCode = `<neo-accordion
  class="block w-full max-w-xl"
  type="multiple"
  [defaultValue]="['item-1']"
>
  <neo-accordion-item value="item-1">
    <neo-accordion-trigger>Can multiple panels open?</neo-accordion-trigger>
    <neo-accordion-content>
      Yes. Set type="multiple" to allow independent panel state.
    </neo-accordion-content>
  </neo-accordion-item>

  <neo-accordion-item value="item-2">
    <neo-accordion-trigger>Can panels start open?</neo-accordion-trigger>
    <neo-accordion-content>
      Yes. Use defaultValue for uncontrolled accordions
      or bind value for controlled state.
    </neo-accordion-content>
  </neo-accordion-item>
</neo-accordion>`;

  protected readonly disabledExampleCode = `<neo-accordion class="block w-full max-w-xl" defaultValue="enabled">
  <neo-accordion-item value="enabled">
    <neo-accordion-trigger>Enabled item</neo-accordion-trigger>
    <neo-accordion-content>
      This panel can be opened and closed normally.
    </neo-accordion-content>
  </neo-accordion-item>

  <neo-accordion-item value="disabled" disabled>
    <neo-accordion-trigger>Disabled item</neo-accordion-trigger>
    <neo-accordion-content>
      Disabled triggers cannot be activated.
    </neo-accordion-content>
  </neo-accordion-item>
</neo-accordion>`;
}
