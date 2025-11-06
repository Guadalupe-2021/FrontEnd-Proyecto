import { TestBed } from '@angular/core/testing';

import { TallerService } from './taller.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('TallerService', () => {
  let service: TallerService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [
          TallerService, provideHttpClient(),provideHttpClientTesting()]});
    service = TestBed.inject(TallerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
