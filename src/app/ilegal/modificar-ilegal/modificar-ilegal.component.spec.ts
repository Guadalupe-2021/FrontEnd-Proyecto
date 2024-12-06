import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarIlegalComponent } from './modificar-ilegal.component';

describe('ModificarIlegalComponent', () => {
  let component: ModificarIlegalComponent;
  let fixture: ComponentFixture<ModificarIlegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarIlegalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarIlegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
