import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaCondenaComponent } from './alta-condena.component';

describe('AltaCondenaComponent', () => {
  let component: AltaCondenaComponent;
  let fixture: ComponentFixture<AltaCondenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaCondenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaCondenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
