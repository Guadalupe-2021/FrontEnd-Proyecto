import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarReclusosComponent } from './buscar-reclusos.component';

describe('BuscarReclusosComponent', () => {
  let component: BuscarReclusosComponent;
  let fixture: ComponentFixture<BuscarReclusosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarReclusosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarReclusosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
