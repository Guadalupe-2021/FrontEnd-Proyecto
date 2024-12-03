import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarGuardiaComponent } from './buscar-guardia.component';

describe('BuscarGuardiaComponent', () => {
  let component: BuscarGuardiaComponent;
  let fixture: ComponentFixture<BuscarGuardiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarGuardiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarGuardiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
