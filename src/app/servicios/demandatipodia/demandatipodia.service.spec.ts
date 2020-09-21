import { TestBed } from '@angular/core/testing';

import { DemandatipodiaService } from './demandatipodia.service';

describe('DemandatipodiaService', () => {
  let service: DemandatipodiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandatipodiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
