import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberarReclusoComponent } from './liberar-recluso.component';

describe('LiberarReclusoComponent', () => {
  let component: LiberarReclusoComponent;
  let fixture: ComponentFixture<LiberarReclusoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiberarReclusoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiberarReclusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
