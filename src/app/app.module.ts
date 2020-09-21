import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent,
    GraficademandaComponent,
    GridcomponentComponent,
    DetalleaporteshidricosComponent
  ],
  imports: [
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
