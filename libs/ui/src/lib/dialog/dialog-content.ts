import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nb-dialog-content',
  standalone: true,
  template: `<ng-content />`,
  host: {
    '[attr.data-slot]': '"dialog-content"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbDialogContent {}
