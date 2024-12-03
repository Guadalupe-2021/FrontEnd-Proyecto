import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaSentenciaComponent } from './alta-sentencia.component';

describe('AltaSentenciaComponent', () => {
  let component: AltaSentenciaComponent;
  let fixture: ComponentFixture<AltaSentenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaSentenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaSentenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
