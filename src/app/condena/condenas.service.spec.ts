import { TestBed } from '@angular/core/testing';

import { CondenasService } from './condenas.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('CondenasService', () => {
  let service: CondenasService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [
          CondenasService, provideHttpClient(),provideHttpClientTesting()]});
    service = TestBed.inject(CondenasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
