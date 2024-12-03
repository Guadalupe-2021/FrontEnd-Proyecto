import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaIlegalComponent } from './alta-ilegal.component';

describe('AltaIlegalComponent', () => {
  let component: AltaIlegalComponent;
  let fixture: ComponentFixture<AltaIlegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaIlegalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaIlegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
