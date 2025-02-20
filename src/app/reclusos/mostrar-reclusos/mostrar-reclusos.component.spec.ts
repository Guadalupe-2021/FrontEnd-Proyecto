import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarReclusosComponent } from './mostrar-reclusos.component';

describe('MostrarReclusosComponent', () => {
  let component: MostrarReclusosComponent;
  let fixture: ComponentFixture<MostrarReclusosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarReclusosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarReclusosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
