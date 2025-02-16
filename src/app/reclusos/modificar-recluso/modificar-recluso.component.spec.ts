import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarReclusoComponent } from './modificar-recluso.component';

describe('ModificarReclusoComponent', () => {
  let component: ModificarReclusoComponent;
  let fixture: ComponentFixture<ModificarReclusoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarReclusoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarReclusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
