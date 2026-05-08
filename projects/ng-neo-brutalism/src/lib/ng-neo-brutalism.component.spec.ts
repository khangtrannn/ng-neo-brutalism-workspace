import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNeoBrutalismComponent } from './ng-neo-brutalism.component';

describe('NgNeoBrutalismComponent', () => {
  let component: NgNeoBrutalismComponent;
  let fixture: ComponentFixture<NgNeoBrutalismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgNeoBrutalismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgNeoBrutalismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
