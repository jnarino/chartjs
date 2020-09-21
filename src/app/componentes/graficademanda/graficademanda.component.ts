import { DemandatipodiaService } from './../../servicios/demandatipodia/demandatipodia.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-graficademanda',
  templateUrl: './graficademanda.component.html',
  styleUrls: ['./graficademanda.component.css']
})
export class GraficademandaComponent implements OnInit {

  datosProm2020 = [];
  datosProm2019 = [];
  crecimiento = [];
  nombre = [];

  lineChartData: ChartDataSets[] = [
    { data: this.datosProm2019, label: 'Prom. dia 2019 (GWh)' },
    { data: this.datosProm2020, label: 'Prom. dia 2019 (GWh)' },
    { data: this.crecimiento, label: 'Crecimiento(%)', type: 'line' }

  ];

  lineChartLabels: Label[] = this.nombre;

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
      borderColor: 'rgba(17, 95, 132)',
    },
    {
      borderColor: 'Orange'
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'bar';

  constructor(private _demandaTipoDiaService: DemandatipodiaService) { }

  ngOnInit(): void {
    this._demandaTipoDiaService.consultarDemandaTipoDia()
      .subscribe(elemento => {


        //console.log(elemento);
        elemento.Variables[0].Datos.forEach(res => {
          console.log(res.Valor);
          this.datosProm2019.push(res.Valor);
          this.nombre.push(res.Nombre);
        });
        elemento.Variables[1].Datos.forEach(res => {
          this.datosProm2020.push(res.Valor);
        });
        elemento.Variables[2].Datos.forEach(res => {
          this.crecimiento.push(res.Valor);
        });

      });

  }

}


