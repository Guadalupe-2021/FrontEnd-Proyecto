import { TestBed } from '@angular/core/testing';

import { CondenasService } from './condenas.service';

describe('CondenasService', () => {
  let service: CondenasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondenasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
