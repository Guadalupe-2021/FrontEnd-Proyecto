import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModSentenciaComponent } from './mod-sentencia.component';

describe('ModSentenciaComponent', () => {
  let component: ModSentenciaComponent;
  let fixture: ComponentFixture<ModSentenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModSentenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModSentenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
