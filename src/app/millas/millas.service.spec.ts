import { TestBed } from '@angular/core/testing';

import { MillasService } from './millas.service';

describe('MillasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MillasService = TestBed.get(MillasService);
    expect(service).toBeTruthy();
  });
});
