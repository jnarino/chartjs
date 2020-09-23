import { Injectable } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { GraficaLinealBasica } from 'src/app/servicios/graficas/grafica-lineal-basica.model';
import { GraficaLinealBasicaService } from 'src/app/servicios/graficas/grafica-lineal-basica.service';
import { ReservaHidricaService } from 'src/app/servicios/oferta/reserva-hidrica/reserva-hidrica.service';

@Injectable({
  providedIn: 'root',
})
export class MostrarGraficaReservaHidricaService {
  grafica = new GraficaLinealBasica();
  constructor(
    private reservaHidricaService: ReservaHidricaService,
    private graficaLinealBasicaService: GraficaLinealBasicaService
  ) {}

  ejecutarServicio(resolucion) {
    if (resolucion === 'diaria') {
      this.reservaHidricaService.obtenerReservasHidricasDiaras().subscribe((aporteHidrico) => {
        this.mostrarGrafica(aporteHidrico);
      });
    } else if (resolucion === 'mensual') {
      this.reservaHidricaService.obtenerReservasHidricasMensuales().subscribe((aporteHidrico) => {
        this.mostrarGrafica(aporteHidrico);
      });
    }
  }

  mostrarGrafica(aporteHidrico) {
    const fechasAportes = [];
    const volumenUtil = [];
    const capicidadUtil = [];
    const aporteHidricoVolumenUtil = aporteHidrico.Variables[0];
    const aporteHidricoCapacidadUtil = aporteHidrico.Variables[1];
    aporteHidricoVolumenUtil.Datos.reverse();
    aporteHidricoCapacidadUtil.Datos.reverse();
    aporteHidricoVolumenUtil.Datos.forEach((res) => {
      volumenUtil.push(res.Valor);
      const fecha = new Date(res.Fecha);
      fechasAportes.push(
        fecha.toLocaleDateString('es', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      );
    });
    aporteHidricoCapacidadUtil.Datos.forEach((res) => {
      capicidadUtil.push(res.Valor);
    });
    const conjuntoDeDatos: ChartDataSets[] = [
      {
        data: volumenUtil,
        label: aporteHidricoVolumenUtil.Nombre,
        lineTension: 0,
        backgroundColor: '#a0bfce',
        pointHoverRadius: 0,
        fill: true,
      },
      {
        data: capicidadUtil,
        label: aporteHidricoCapacidadUtil.Nombre,
        lineTension: 0.1,
        fill: false,
      },
    ];
    this.grafica = this.graficaLinealBasicaService.construirGraficaBasica(
      aporteHidrico.Nombre,
      conjuntoDeDatos,
      fechasAportes,
      aporteHidricoVolumenUtil.UnidadMedida
    );
  }
}
