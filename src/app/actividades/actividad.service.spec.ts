import { TestBed } from '@angular/core/testing';

import { ActividadService } from './actividad.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ActividadService', () => {
  let service: ActividadService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [
          ActividadService, provideHttpClient(),provideHttpClientTesting()]});
    service = TestBed.inject(ActividadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
