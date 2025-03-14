import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuActividadComponent } from './menu-actividad.component';

describe('MenuActividadComponent', () => {
  let component: MenuActividadComponent;
  let fixture: ComponentFixture<MenuActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuActividadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
