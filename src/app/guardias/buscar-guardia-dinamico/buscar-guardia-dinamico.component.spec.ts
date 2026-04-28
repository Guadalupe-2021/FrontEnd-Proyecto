import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarGuardiaDinamicoComponent } from './buscar-guardia-dinamico.component';

describe('BuscarGuardiaDinamicoComponent', () => {
  let component: BuscarGuardiaDinamicoComponent;
  let fixture: ComponentFixture<BuscarGuardiaDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarGuardiaDinamicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarGuardiaDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
