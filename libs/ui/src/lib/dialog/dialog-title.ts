import { Directive } from '@angular/core';

import { nbClass } from '../core/class';

@Directive({
  selector: '[nbDialogTitle]',
  standalone: true,
  host: {
    '[class]': 'classes',
    '[attr.data-slot]': '"dialog-title"',
  },
})
export class NbDialogTitle {
  protected readonly classes = nbClass(
    'block px-6 pt-6 pb-2 text-lg font-bold leading-none'
  );
}
