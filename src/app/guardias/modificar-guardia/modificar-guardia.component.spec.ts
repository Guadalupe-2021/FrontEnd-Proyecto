import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarGuardiaComponent } from './modificar-guardia.component';

describe('ModificarGuardiaComponent', () => {
  let component: ModificarGuardiaComponent;
  let fixture: ComponentFixture<ModificarGuardiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarGuardiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarGuardiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
