import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGuardiaComponent } from './formulario-guardia.component';

describe('FormularioGuardiaComponent', () => {
  let component: FormularioGuardiaComponent;
  let fixture: ComponentFixture<FormularioGuardiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioGuardiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioGuardiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
