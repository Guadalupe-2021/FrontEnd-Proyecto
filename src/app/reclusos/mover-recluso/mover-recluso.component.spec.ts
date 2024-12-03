import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoverReclusoComponent } from './mover-recluso.component';

describe('MoverReclusoComponent', () => {
  let component: MoverReclusoComponent;
  let fixture: ComponentFixture<MoverReclusoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoverReclusoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoverReclusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
