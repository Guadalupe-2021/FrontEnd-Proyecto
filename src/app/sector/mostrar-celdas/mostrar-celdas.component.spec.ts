import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCeldasComponent } from './mostrar-celdas.component';

describe('MostrarCeldasComponent', () => {
  let component: MostrarCeldasComponent;
  let fixture: ComponentFixture<MostrarCeldasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarCeldasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarCeldasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
