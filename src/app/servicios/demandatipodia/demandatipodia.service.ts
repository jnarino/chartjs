import { DemandaTipoDiaria } from './../../DemandaTipoDiaria';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandatipodiaService {

  constructor(private _http: HttpClient) { }

  consultarDemandaTipoDia() {
    return this._http.get<DemandaTipoDiaria>('https://serviciosfacturacion.xm.com.co/XM.Portal.Indicadores/api/Demanda/DemandaTipoDia');
  }
}
