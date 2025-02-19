import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleReclusoComponent } from './detalle-recluso.component';

describe('DetalleReclusoComponent', () => {
  let component: DetalleReclusoComponent;
  let fixture: ComponentFixture<DetalleReclusoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleReclusoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleReclusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
