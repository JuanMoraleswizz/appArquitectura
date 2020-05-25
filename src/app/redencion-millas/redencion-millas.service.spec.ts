import { TestBed } from '@angular/core/testing';

import { RedencionMillasService } from './redencion-millas.service';

describe('RedencionMillasService', () => {
  let service: RedencionMillasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedencionMillasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
