import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionTallerComponent } from './inscripcion-taller.component';

describe('InscripcionTallerComponent', () => {
  let component: InscripcionTallerComponent;
  let fixture: ComponentFixture<InscripcionTallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscripcionTallerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
