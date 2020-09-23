import { TestBed } from '@angular/core/testing';

import { MostrarGraficaReservaHidricaService } from './mostrar-grafica-reserva-hidrica.service';

describe('MostrarGraficaReservaHidricaService', () => {
  let service: MostrarGraficaReservaHidricaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarGraficaReservaHidricaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
