import { TestBed } from '@angular/core/testing';

import { DialogSocioService } from './dialog-socio.service';

describe('DialogSocioService', () => {
  let service: DialogSocioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogSocioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
