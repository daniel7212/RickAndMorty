import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { LugaresComponent } from './lugares/lugares.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { DetallePersonajeComponent } from './personajes/detalle-personaje/detalle-personaje.component';
import { DetalleLugarComponent } from './lugares/detalle-lugar/detalle-lugar.component';
import { DetalleEpisodioComponent } from './episodios/detalle-episodio/detalle-episodio.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    LugaresComponent,
    EpisodiosComponent,
    DetallePersonajeComponent,
    DetalleLugarComponent,
    DetalleEpisodioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
