import { Directive } from '@angular/core';

import { nbClass } from '../core/class';

@Directive({
  selector: '[nbDialogDescription]',
  standalone: true,
  host: {
    '[class]': 'classes',
    '[attr.data-slot]': '"dialog-description"',
  },
})
export class NbDialogDescription {
  protected readonly classes = nbClass(
    'block px-6 pb-4 text-sm font-medium text-gray-600'
  );
}
