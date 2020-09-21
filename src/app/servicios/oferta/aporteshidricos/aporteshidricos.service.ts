import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AportesHidricos } from './../../../AportesHidricos';

@Injectable({
  providedIn: 'root'
})
export class AporteshidricosService {

  constructor(private _http: HttpClient) { }

  consultarAportesHidricos() {
    return this._http.get<AportesHidricos>('https://serviciosfacturacion.xm.com.co/XM.Portal.Indicadores/api/Oferta/AportesHidricos/dia');
  }
}
