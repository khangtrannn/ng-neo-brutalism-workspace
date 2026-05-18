import { ChangeDetectionStrategy, Component } from '@angular/core';

import { nbClass } from '../core/class';

@Component({
  selector: 'nb-dialog-content',
  standalone: true,
  template: `<ng-content />`,
  host: {
    '[class]': 'classes',
    '[attr.data-slot]': '"dialog-content"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbDialogContent {
  protected readonly classes = nbClass(
    'flex-1 overflow-y-auto px-6 py-4 border-y-2 border-(--nb-border)'
  );
}
