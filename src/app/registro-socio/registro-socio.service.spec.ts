import { TestBed } from '@angular/core/testing';

import { RegistroSocioService } from './registro-socio.service';

describe('RegistroSocioService', () => {
  let service: RegistroSocioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroSocioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
