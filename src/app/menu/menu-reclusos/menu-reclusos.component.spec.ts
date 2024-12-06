import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuReclusosComponent } from './menu-reclusos.component';

describe('MenuReclusosComponent', () => {
  let component: MenuReclusosComponent;
  let fixture: ComponentFixture<MenuReclusosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuReclusosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuReclusosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
