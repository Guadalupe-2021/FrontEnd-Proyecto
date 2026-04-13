import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSectorComponent } from './menu-sector.component';

describe('MenuSectorComponent', () => {
  let component: MenuSectorComponent;
  let fixture: ComponentFixture<MenuSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
