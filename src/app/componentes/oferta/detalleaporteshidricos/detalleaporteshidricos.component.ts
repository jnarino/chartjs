import { Component, OnInit } from '@angular/core';
import { DetalleAporteHidricos } from 'src/app/DetalleAportesHidricos';
import { DetalleaporteshidricosService } from 'src/app/servicios/oferta/detalleaporteshidricos/detalleaporteshidricos.service';

@Component({
  selector: 'app-detalleaporteshidricos',
  templateUrl: './detalleaporteshidricos.component.html',
  styleUrls: ['./detalleaporteshidricos.component.css']
})
export class DetalleaporteshidricosComponent implements OnInit {

  tableColumns = [];
  valores: string[] = [];

  constructor(private _detalleAportesHidricosService: DetalleaporteshidricosService) { }

  ngOnInit(): void {
    this._detalleAportesHidricosService.consultaDetalleAportesHidricos()
      .subscribe(element => {
        element.Campos.forEach(res => {
          this.tableColumns.push(res);
        });
        element.Valores.forEach(element => {
          this.valores.push(element.toString());
        },
          (error) => console.log(error));
      });
    console.log(this.tableColumns);
    console.log(this.valores);

  }



}
