import { GraficaLinealBasica } from "./grafica-lineal-basica.model";
import { Injectable } from "@angular/core";
import { ChartDataSets } from "chart.js";
import { Color, Label } from 'ng2-charts';

@Injectable({
  providedIn: 'root',
})
export class GraficaLinealBasicaService {
  coloresPorDefecto: Color[] = [
    {
      borderColor: '#a0bfce' ,
    },
    {
      borderColor: 'orange'
    },
    {
      borderColor: 'green'
    },
    {
      borderColor: 'blue'
    },
  ];

  constructor() {}

  construirGraficaBasica(
    tituloGrafica = '',
    conjuntoDeDatos: ChartDataSets[] = [],
    etiquetasConjuntoDeDatos: Label[] = [],
    etiquetaMedidaVertical = '',
    colores: Color[] = this.coloresPorDefecto,
    posicionEtiquetasConjuntoDeDatos = 'bottom'
  ) {
    const opcionesBasicasGraficaLineal = {
      responsive: true,
      title: {
        display: true,
        text: tituloGrafica,
      },
      legend: {
        position: posicionEtiquetasConjuntoDeDatos,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              maxTicksLimit: 6,
            },
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              maxTicksLimit: 8,
              beginAtZero: true,
              stepSize: 0.5,
            },
            scaleLabel: {
              display: true,
              fontSize: 18,
              labelString: etiquetaMedidaVertical,
            },
          },
        ],
      },
    };
    const graficaBasica = new GraficaLinealBasica();
    graficaBasica.datasets = conjuntoDeDatos;
    graficaBasica.labels = etiquetasConjuntoDeDatos;
    graficaBasica.colors = colores;
    graficaBasica.options = opcionesBasicasGraficaLineal;
    return graficaBasica;
  }
}
