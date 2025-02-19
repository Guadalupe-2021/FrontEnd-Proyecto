import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCondenaComponent } from './formulario-condena.component';

describe('FormularioCondenaComponent', () => {
  let component: FormularioCondenaComponent;
  let fixture: ComponentFixture<FormularioCondenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCondenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCondenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
