import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { AporteshidricosService } from 'src/app/servicios/oferta/aporteshidricos/aporteshidricos.service';
import { ReservaHidricaService } from '../../../../servicios/oferta/reserva-hidrica/reserva-hidrica.service';
import { Ciudades, Region } from '../../../../DetalleAportesHidricos';
import { CiudadDetalleReservaHidrica, RegionDetalleReservaHidrica } from './RegionReservaHidrica';

@Component({
  selector: 'app-detalle-reserva-hidrica',
  templateUrl: './detalle-reserva-hidrica.component.html',
  styleUrls: [],
})
export class DetalleReservaHidricaComponent implements OnInit {
  regiones = [];

  constructor(private reservaHidricaService: ReservaHidricaService) {}

  ngOnInit(): void {
    this.reservaHidricaService.obtenerDetalleReservasHidricas().subscribe((resultado) => {
      let nombreRegion = '';
      resultado.Valores.forEach((valor) => {
        if (valor[2] !== nombreRegion) {
          nombreRegion = valor[2];
          const mismaRegion = resultado.Valores.filter((resultadito) => resultadito[2] === nombreRegion);
          const ciudades: CiudadDetalleReservaHidrica[] = [];
          let sumaVolumenUtilDiarioGwh = 0;
          let sumaVolumenUtilDiarioPorcentaje = 0;
          let sumaCapacidadUtilGwh = 0;
          let sumaVolumenGwh = 0;
          let sumanVolumenPorcentaje = 0;
          let sumanVolumenMaximoTecnicoGwh = 0;
          let sumanVertimientoGwh = 0;
          let sumanMosGwh = 0;
          let sumanMoiGwh = 0;
          let sumaDiferencia = 0;

          mismaRegion.forEach((regioncita) => {
            sumaVolumenUtilDiarioGwh += Number(regioncita[19]);
            sumaVolumenUtilDiarioPorcentaje += Number(regioncita[23]);
            sumaCapacidadUtilGwh += Number(regioncita[24]);
            sumaVolumenGwh += Number(regioncita[3]);
            sumanVolumenPorcentaje += Number(regioncita[4]);
            sumanVolumenMaximoTecnicoGwh += Number(regioncita[9]);
            sumanVertimientoGwh += Number(regioncita[12]);
            sumanMosGwh += Number(regioncita[6]);
            sumanMoiGwh += Number(regioncita[7]);
            sumaDiferencia += Number(regioncita[10]);
            const ciudad = new CiudadDetalleReservaHidrica(
              regioncita[0],
              regioncita[1],
              regioncita[2],
              Number(regioncita[18]),
              Number(regioncita[19]),
              Number(regioncita[23]),
              Number(regioncita[24]),
              Number(regioncita[25]),
              Number(regioncita[23]) - Number(regioncita[25]),
              Number(regioncita[5]),
              Number(regioncita[3]),
              Number(regioncita[4]),
              Number(regioncita[9]),
              Number(regioncita[12]),
              Number(regioncita[6]),
              Number(regioncita[7]),
              Number(regioncita[10])
            );
            ciudades.push(ciudad);
          });
          const nuevaRegion = new RegionDetalleReservaHidrica(
            nombreRegion,
            nombreRegion,
            ciudades,
            sumaVolumenUtilDiarioGwh,
            sumaVolumenUtilDiarioPorcentaje / ciudades.length,
            sumaCapacidadUtilGwh,
            sumaVolumenGwh,
            (sumanVolumenPorcentaje / ciudades.length),
            sumanVolumenMaximoTecnicoGwh,
            sumanVertimientoGwh,
            sumanMosGwh,
            sumanMoiGwh,
            sumaDiferencia
          );
          this.regiones.push(nuevaRegion);
        }
      });
    });
  }
}
