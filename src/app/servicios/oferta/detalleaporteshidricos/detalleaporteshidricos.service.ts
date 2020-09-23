import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetalleAporteHidricos, Region } from 'src/app/DetalleAportesHidricos';

@Injectable({
  providedIn: 'root'
})
export class DetalleaporteshidricosService {

  constructor(private _http: HttpClient) { }

  consultaDetalleAportesHidricos() {
    return this._http.get<Region>('https://serviciosfacturacion.xm.com.co/XM.Portal.Indicadores/api/consulta/Qry0456?usuario=portal&pwd=Spportal%2325');
  }
}
