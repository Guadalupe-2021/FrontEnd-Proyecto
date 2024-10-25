import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarActividadComponent } from './modificar-actividad.component';

describe('ModificarActividadComponent', () => {
  let component: ModificarActividadComponent;
  let fixture: ComponentFixture<ModificarActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarActividadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
