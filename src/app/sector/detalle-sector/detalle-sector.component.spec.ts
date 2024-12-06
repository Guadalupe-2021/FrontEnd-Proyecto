import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSectorComponent } from './detalle-sector.component';

describe('DetalleSectorComponent', () => {
  let component: DetalleSectorComponent;
  let fixture: ComponentFixture<DetalleSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleSectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
