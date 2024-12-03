import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIlegalComponent } from './menu-ilegal.component';

describe('MenuIlegalComponent', () => {
  let component: MenuIlegalComponent;
  let fixture: ComponentFixture<MenuIlegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuIlegalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuIlegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
