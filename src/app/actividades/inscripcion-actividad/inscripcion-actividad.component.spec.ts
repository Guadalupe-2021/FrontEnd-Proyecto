import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionActividadComponent } from './inscripcion-actividad.component';

describe('InscripcionActividadComponent', () => {
  let component: InscripcionActividadComponent;
  let fixture: ComponentFixture<InscripcionActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscripcionActividadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
