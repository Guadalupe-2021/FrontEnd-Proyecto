import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AltaActividadComponent } from './alta-actividad.component';
import { FormularioActividadComponent } from '../formulario-actividad/formulario-actividad.component';
import { ActividadService } from '../actividad.service.js';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideToastr } from 'ngx-toastr';
import { provideRouter, withComponentInputBinding } from '@angular/router';

describe('AltaActividadComponent', () => {
  let component: AltaActividadComponent;
  let fixture: ComponentFixture<AltaActividadComponent>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
    providers: [AltaActividadComponent,provideRouter([], withComponentInputBinding()),
    provideToastr(), provideHttpClient(),provideHttpClientTesting()]})
}));
    //.compileComponents();
beforeEach(()=>{
    fixture = TestBed.createComponent(AltaActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
