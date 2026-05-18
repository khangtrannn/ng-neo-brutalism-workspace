import { Directive } from '@angular/core';

@Directive({
  selector: '[nbDialogDescription]',
  standalone: true,
  host: {
    '[attr.data-slot]': '"dialog-description"',
  },
})
export class NbDialogDescription {}
