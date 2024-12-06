import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarTurnosComponent } from './finalizar-turnos.component';

describe('FinalizarTurnosComponent', () => {
  let component: FinalizarTurnosComponent;
  let fixture: ComponentFixture<FinalizarTurnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalizarTurnosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizarTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
