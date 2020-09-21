import { TestBed } from '@angular/core/testing';

import { AporteshidricosService } from './aporteshidricos.service';

describe('AporteshidricosService', () => {
  let service: AporteshidricosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AporteshidricosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
 