import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSentenciaComponent } from './menu-sentencia.component';

describe('MenuSentenciaComponent', () => {
  let component: MenuSentenciaComponent;
  let fixture: ComponentFixture<MenuSentenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSentenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSentenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
