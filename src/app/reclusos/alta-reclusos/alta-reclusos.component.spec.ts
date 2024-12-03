import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaReclusosComponent } from './alta-reclusos.component';

describe('AltaReclusosComponent', () => {
  let component: AltaReclusosComponent;
  let fixture: ComponentFixture<AltaReclusosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaReclusosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaReclusosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
