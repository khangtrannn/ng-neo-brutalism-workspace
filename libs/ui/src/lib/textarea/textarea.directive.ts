import { Directive, input } from '@angular/core';

import { nbClass } from '../core/class';
import type { NbTextareaSize } from './textarea.types';

@Directive({
  selector: 'textarea[nbTextarea]',
  standalone: true,
  host: {
    '[class]': 'classes',
    '[attr.data-size]': 'size()',
  },
})
export class NbTextarea {
  readonly size = input<NbTextareaSize>('default');

  protected readonly classes = nbClass(
    'flex rounded-nb border-2 border-(--nb-border)',
    'text-(--nb-foreground)',
    'font-medium',
    'shadow-nb',
    'placeholder:text-gray-400',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--nb-border) focus-visible:ring-offset-2 focus-visible:shadow-none',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'resize-none'
  );
}
