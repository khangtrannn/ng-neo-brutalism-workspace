import { InjectionToken } from '@angular/core';

export type NbAccordionType = 'single' | 'multiple';

export type NbAccordionValue = string | string[] | null;

export interface NbAccordionController {
  isItemOpen(value: string): boolean;
  toggleItem(value: string): void;
}

export const NB_ACCORDION = new InjectionToken<NbAccordionController>(
  'NB_ACCORDION'
);
