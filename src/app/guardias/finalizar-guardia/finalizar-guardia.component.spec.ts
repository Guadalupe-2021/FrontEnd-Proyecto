import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarGuardiaComponent } from './finalizar-guardia.component';

describe('FinalizarGuardiaComponent', () => {
  let component: FinalizarGuardiaComponent;
  let fixture: ComponentFixture<FinalizarGuardiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalizarGuardiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizarGuardiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
