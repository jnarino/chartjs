import { Component, OnInit, ɵɵviewQuery } from '@angular/core';
import { Ciudades, DetalleAporteHidricos, Region } from 'src/app/DetalleAportesHidricos';
import { DetalleaporteshidricosService } from 'src/app/servicios/oferta/detalleaporteshidricos/detalleaporteshidricos.service';

@Component({
  selector: 'app-detalleaporteshidricos',
  templateUrl: './detalleaporteshidricos.component.html',
  styleUrls: ['./detalleaporteshidricos.component.css']
})
export class DetalleaporteshidricosComponent implements OnInit {

  ciudades: Ciudades[] = [];
  tableColumns = [];



  constructor(private _detalleAportesHidricosService: DetalleaporteshidricosService) { }

  ngOnInit(): void {

    this._detalleAportesHidricosService.consultaDetalleAportesHidricos()
      .subscribe(element => {

        element.Campos.forEach(res => {
          this.tableColumns.push(res);
        });

        element.Valores.forEach(element => {
          // console.log(element); // ["2020-09-22 00:00:00", "BETANIA CP", "CENTRO", "1.36", "95.58", "1.12", "78.42", "1.82", "0.97", "127.94", "68.36", "74.72527472527472527472527473", "61.53846153846153846153846154"]



          let ciudad = new Ciudades(element[0], element[1], element[2], element[3], element[4], element[5],
            element[6], element[7], element[8], element[9], element[10], element[11], element[12]);
          this.ciudades.push(ciudad);

          console.log(this.ciudades);

        });
      });
  }
}
