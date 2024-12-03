import { TestBed } from '@angular/core/testing';

import { ReclusosService } from './reclusos.service';

describe('ReclusosService', () => {
  let service: ReclusosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclusosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
