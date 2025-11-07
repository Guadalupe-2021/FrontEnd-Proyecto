import { TestBed } from '@angular/core/testing';

import { LogInService } from './log-in.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('LogInService', () => {
  let service: LogInService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [
          LogInService, provideHttpClient(),provideHttpClientTesting()]});
    service = TestBed.inject(LogInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
