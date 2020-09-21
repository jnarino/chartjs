import { TestBed } from '@angular/core/testing';

import { DetalleaporteshidricosService } from './detalleaporteshidricos.service';

describe('DetalleaporteshidricosService', () => {
  let service: DetalleaporteshidricosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleaporteshidricosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
