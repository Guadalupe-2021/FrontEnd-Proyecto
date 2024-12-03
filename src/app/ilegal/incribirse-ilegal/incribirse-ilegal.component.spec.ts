import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncribirseIlegalComponent } from './incribirse-ilegal.component';

describe('IncribirseIlegalComponent', () => {
  let component: IncribirseIlegalComponent;
  let fixture: ComponentFixture<IncribirseIlegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncribirseIlegalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncribirseIlegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
