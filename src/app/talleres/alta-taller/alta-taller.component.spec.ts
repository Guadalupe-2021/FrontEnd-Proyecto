import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaTallerComponent } from './alta-taller.component';

describe('AltaTallerComponent', () => {
  let component: AltaTallerComponent;
  let fixture: ComponentFixture<AltaTallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaTallerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
