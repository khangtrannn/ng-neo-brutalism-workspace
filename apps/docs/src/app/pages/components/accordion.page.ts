import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  NbAccordion,
  NbAccordionContent,
  NbAccordionItem,
  NbAccordionTrigger,
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
  ],
  template: `
    <article>
      <header id="overview" class="mb-8 scroll-mt-32">
        <p class="mb-2 text-sm font-bold uppercase tracking-wide">
          Components
        </p>
        <h1>Accordion</h1>
        <p class="mt-0 max-w-3xl text-base font-medium sm:text-lg">
          A vertically stacked set of interactive headings that reveal related
          content panels.
        </p>
      </header>

      <section id="preview">
        <h2>Preview</h2>
        <docs-example [code]="exampleCode">
          <neo-accordion>
            <neo-accordion-item value="item-1">
              <neo-accordion-trigger>
                Is it accessible?
              </neo-accordion-trigger>
              <neo-accordion-content>
                Yes. It uses native button semantics and ARIA state.
              </neo-accordion-content>
            </neo-accordion-item>
          </neo-accordion>
        </docs-example>
      </section>

      <section id="usage">
        <h2>Usage</h2>
        <docs-code-block class="block mb-5" title="Import" [code]="importCode" />
        <docs-code-block title="Template" [code]="exampleCode" />
      </section>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AccordionPageComponent {
  protected readonly importCode = `import {
  NbAccordion,
  NbAccordionContent,
  NbAccordionItem,
  NbAccordionTrigger,
} from '@ng-neo-brutalism/ui';`;

  protected readonly exampleCode = `<neo-accordion>
  <neo-accordion-item value="item-1">
    <neo-accordion-trigger>Is it accessible?</neo-accordion-trigger>
    <neo-accordion-content>
      Yes. It uses native button semantics and ARIA state.
    </neo-accordion-content>
  </neo-accordion-item>
</neo-accordion>`;
}
