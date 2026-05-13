import { Directive, computed, input } from '@angular/core';

import { nbClass } from '../core/class';
import type { NbCheckboxSize } from './checkbox.types';

@Directive({
  selector: 'input[nbCheckbox]',
  standalone: true,
  host: {
    '[class]': 'classes()',
    '[attr.data-size]': 'size()',
  },
})
export class NbCheckbox {
  readonly size = input<NbCheckboxSize>('default');

  protected readonly classes = computed(() =>
    nbClass(
      'peer grid shrink-0 cursor-pointer appearance-none place-content-center',
      'outline-2 outline-(--nb-border) ring-offset-white',
      'checked:bg-(--nb-main) checked:text-white',
      'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-(--nb-border) focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      this.sizeClass()
    )
  );

  private sizeClass(): string {
    const map: Record<NbCheckboxSize, string> = {
      default: 'size-4',
      sm: 'size-3.5',
      lg: 'size-5',
    };
    return map[this.size()];
  }
}
