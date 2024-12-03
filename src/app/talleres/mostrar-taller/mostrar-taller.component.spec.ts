import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTallerComponent } from './mostrar-taller.component';

describe('MostrarTallerComponent', () => {
  let component: MostrarTallerComponent;
  let fixture: ComponentFixture<MostrarTallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarTallerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
