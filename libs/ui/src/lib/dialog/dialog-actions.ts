import { ChangeDetectionStrategy, Component } from '@angular/core';

import { nbClass } from '../core/class';

@Component({
  selector: 'nb-dialog-actions',
  standalone: true,
  template: `<ng-content />`,
  host: {
    '[class]': 'classes',
    '[attr.data-slot]': '"dialog-actions"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbDialogActions {
  protected readonly classes = nbClass(
    'flex items-center justify-end gap-3 px-6 py-4'
  );
}
