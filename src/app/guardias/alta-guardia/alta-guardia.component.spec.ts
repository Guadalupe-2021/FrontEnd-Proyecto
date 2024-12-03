import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaGuardiaComponent } from './alta-guardia.component';

describe('AltaGuardiaComponent', () => {
  let component: AltaGuardiaComponent;
  let fixture: ComponentFixture<AltaGuardiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaGuardiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaGuardiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
