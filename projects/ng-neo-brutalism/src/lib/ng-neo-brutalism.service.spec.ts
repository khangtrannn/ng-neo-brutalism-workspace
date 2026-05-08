import { TestBed } from '@angular/core/testing';

import { NgNeoBrutalismService } from './ng-neo-brutalism.service';

describe('NgNeoBrutalismService', () => {
  let service: NgNeoBrutalismService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgNeoBrutalismService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
