import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarIlegalComponent } from './mostrar-ilegal.component';

describe('MostrarIlegalComponent', () => {
  let component: MostrarIlegalComponent;
  let fixture: ComponentFixture<MostrarIlegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarIlegalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarIlegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
