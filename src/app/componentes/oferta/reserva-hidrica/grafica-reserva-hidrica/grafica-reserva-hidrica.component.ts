import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MostrarGraficaReservaHidricaService } from './mostrar-grafica-reserva-hidrica.service';

@Component({
  selector: 'app-grafica-reserva-hidrica',
  templateUrl: './grafica-reserva-hidrica.component.html',
  styleUrls: [],
})

export class GraficaReservaHidricaComponent implements OnInit, OnChanges {
  @Input() resolucion = 'diaria';

  constructor(
    public mostrarGraficaReservaHidricaService: MostrarGraficaReservaHidricaService
  ) {}

  ngOnInit(): void {
    this.mostrarGraficaReservaHidricaService.ejecutarServicio(this.resolucion);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.resolucion && changes.resolucion.currentValue) {
      this.mostrarGraficaReservaHidricaService.ejecutarServicio(this.resolucion);
    }
  }
}
