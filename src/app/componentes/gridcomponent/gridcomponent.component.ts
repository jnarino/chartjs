import { GraficademandaComponent } from './../graficademanda/graficademanda.component';
import { GraficaComponent } from './../oferta/grafica/grafica.component';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-gridcomponent',
  templateUrl: './gridcomponent.component.html',
  styleUrls: ['./gridcomponent.component.css']
})
export class GridcomponentComponent implements OnInit {

  constructor() { }

  public seleccion = new FormControl('aportehidricos');

  ngOnInit(): void {
  }
}
