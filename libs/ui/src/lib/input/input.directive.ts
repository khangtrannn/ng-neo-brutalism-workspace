import { Directive, computed, inject, input } from '@angular/core';

import { nbClass } from '../core/class';
import { NB_INPUT_GROUP } from '../input-group/input-group.types';
import type { NbInputSize } from './input.types';

@Directive({
  selector: 'input[nbInput]',
  standalone: true,
  host: {
    '[class]': 'classes()',
    '[attr.data-size]': 'size()',
  },
})
export class NbInput {
  readonly size = input<NbInputSize>('default');

  private readonly group = inject(NB_INPUT_GROUP, { optional: true });

  protected readonly classes = computed(() => {
    const inGroup = this.group !== null;

    return nbClass(
      'flex border-2 border-(--nb-border)',
      'text-(--nb-foreground)',
      'font-medium',
      'placeholder:text-gray-400',
      'file:h-full file:py-0 file:my-0 file:mr-3 file:px-3',
      'file:cursor-pointer file:text-sm file:font-bold',
      'file:bg-(--nb-secondary) file:text-(--nb-secondary-foreground)',
      'file:border-0 file:border-r-2 file:border-(--nb-border)',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      inGroup
        ? [
            'flex-1 min-w-0',
            'bg-transparent',
            'border-0',
            'focus-visible:outline-none',
          ]
        : [
            'rounded-nb',
            'shadow-nb',
            'bg-[#faf3d6]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--nb-border)',
            'focus-visible:ring-offset-2 focus-visible:shadow-none',
          ]
    );
  });
}
