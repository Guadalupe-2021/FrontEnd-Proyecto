import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGuardiaComponent } from './menu-guardia.component';

describe('MenuGuardiaComponent', () => {
  let component: MenuGuardiaComponent;
  let fixture: ComponentFixture<MenuGuardiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuGuardiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuGuardiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
