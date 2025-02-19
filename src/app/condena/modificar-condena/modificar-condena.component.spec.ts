import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCondenaComponent } from './modificar-condena.component';

describe('ModificarCondenaComponent', () => {
  let component: ModificarCondenaComponent;
  let fixture: ComponentFixture<ModificarCondenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarCondenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarCondenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
