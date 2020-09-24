import { AporteshidricosService } from './../../../servicios/oferta/aporteshidricos/aporteshidricos.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  datosMediaHistorica = [];
  datosCaudal = [];
  fehasAportes = [];

  lineChartData: ChartDataSets[] = [
    { data: this.datosMediaHistorica, label: 'Media Historica', lineTension: 0, fill: false, backgroundColor: 'rgba(17, 95, 132)' },
    { data: this.datosCaudal, label: 'Caudal', lineTension: 0.1, fill: false }
  ];

  lineChartLabels: Label[] = this.fehasAportes;

  lineChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Aportes hídricos (GWh)-Resolucion: Diaria '
    },
    legend: {
      position: 'bottom'
    },
    scales: {
      xAxes: [{
        ticks: {
          maxTicksLimit: 6
        },
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 8,
          beginAtZero: true,
          stepSize: 0.5
        },
        scaleLabel: {
          display: true,
          fontSize: 18,
          labelString: 'GHh'
        }
      }],
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'rgba(17, 95, 132)'


    },
    {
      borderColor: 'Orange'
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private _aportesHidricosService: AporteshidricosService) { }

  ngOnInit(): void {
    this._aportesHidricosService.consultarAportesHidricos()
      .subscribe(element => {
        console.log(element);
        element.Variables[0].Datos.reverse().forEach(res => {
          this.datosMediaHistorica.push(res.Valor);
          const fecha = new Date(res.Fecha);
          this.fehasAportes.push(fecha.toLocaleDateString('es', { year: 'numeric', month: 'short', day: 'numeric' }));
        });
        element.Variables[1].Datos.reverse().forEach(res => {
          this.datosCaudal.push(res.Valor);
        });


      });
  }

}
