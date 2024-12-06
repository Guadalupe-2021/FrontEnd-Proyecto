import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarSenteniasComponent } from './mostrar-sentenias.component';

describe('MostrarSenteniasComponent', () => {
  let component: MostrarSenteniasComponent;
  let fixture: ComponentFixture<MostrarSenteniasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarSenteniasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarSenteniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
