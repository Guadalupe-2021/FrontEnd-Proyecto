import { TestBed } from '@angular/core/testing';

import { ReclusosService } from './reclusos.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ReclusosService', () => {
  let service: ReclusosService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [
              ReclusosService, provideHttpClient(),provideHttpClientTesting()]});
    service = TestBed.inject(ReclusosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
