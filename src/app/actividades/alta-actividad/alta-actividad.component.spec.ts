import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaActividadComponent } from './alta-actividad.component';

describe('AltaActividadComponent', () => {
  let component: AltaActividadComponent;
  let fixture: ComponentFixture<AltaActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaActividadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
