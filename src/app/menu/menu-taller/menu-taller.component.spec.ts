import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTallerComponent } from './menu-taller.component';

describe('MenuTallerComponent', () => {
  let component: MenuTallerComponent;
  let fixture: ComponentFixture<MenuTallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuTallerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
