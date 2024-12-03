import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGuardiaComponent } from './mostrar-guardia.component';

describe('MostrarGuardiaComponent', () => {
  let component: MostrarGuardiaComponent;
  let fixture: ComponentFixture<MostrarGuardiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarGuardiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarGuardiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
