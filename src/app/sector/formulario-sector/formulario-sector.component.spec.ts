import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSectorComponent } from './formulario-sector.component';

describe('FormularioSectorComponent', () => {
  let component: FormularioSectorComponent;
  let fixture: ComponentFixture<FormularioSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioSectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
