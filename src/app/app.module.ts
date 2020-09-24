import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { GraficaComponent } from './componentes/oferta/grafica/grafica.component';
import { GraficademandaComponent } from './componentes/graficademanda/graficademanda.component';
import { GridcomponentComponent } from './componentes/gridcomponent/gridcomponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleaporteshidricosComponent } from './componentes/oferta/detalleaporteshidricos/detalleaporteshidricos.component';
import { BrowserModule } from '@angular/platform-browser';
import { GraficaReservaHidricaComponent } from './componentes/oferta/reserva-hidrica/grafica-reserva-hidrica/grafica-reserva-hidrica.component';
import { DetalleReservaHidricaComponent } from './componentes/oferta/reserva-hidrica/detalle-reserva-hidrica/detalle-reserva-hidrica.component';


@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent,
    GraficademandaComponent,
    GridcomponentComponent,
    DetalleaporteshidricosComponent,
    GraficaReservaHidricaComponent,
    DetalleReservaHidricaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
