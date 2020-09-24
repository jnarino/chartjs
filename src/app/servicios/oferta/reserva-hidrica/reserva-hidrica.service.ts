import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IndicadorHidricoDto } from '../indicador-hidrico';
import { DetalleIndicadorHidricoDto } from './detalle-indicador-hidrico';

@Injectable({
  providedIn: 'root'
})
export class ReservaHidricaService {

  constructor(private httpClient: HttpClient) { }

  obtenerReservasHidricasDiaras() {
    return this.httpClient
    .get<IndicadorHidricoDto>('https://serviciosfacturacion.xm.com.co/XM.Portal.Indicadores/api/oferta/reservashidricas/dia');
  }

  obtenerReservasHidricasMensuales() {
    return this.httpClient
    .get<IndicadorHidricoDto>('https://serviciosfacturacion.xm.com.co/XM.Portal.Indicadores/api/oferta/reservashidricas/mes');
  }

  obtenerDetalleReservasHidricas() {
    return this.httpClient
    .get<DetalleIndicadorHidricoDto>('https://serviciosfacturacion.xm.com.co/XM.Portal.Indicadores/api/consulta/Qry0458?usuario=portal&pwd=Spportal%2325');
  }
}
