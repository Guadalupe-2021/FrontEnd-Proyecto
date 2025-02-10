import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReclusoComponent } from './formulario-recluso.component';

describe('FormularioReclusoComponent', () => {
  let component: FormularioReclusoComponent;
  let fixture: ComponentFixture<FormularioReclusoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioReclusoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioReclusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
