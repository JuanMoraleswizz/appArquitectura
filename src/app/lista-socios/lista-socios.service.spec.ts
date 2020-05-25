import { TestBed } from '@angular/core/testing';

import { ListaSociosService } from './lista-socios.service';

describe('ListaSociosService', () => {
  let service: ListaSociosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaSociosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
