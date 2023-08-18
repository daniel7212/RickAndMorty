import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './personajes/personajes.component';
import { LugaresComponent } from './lugares/lugares.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { DetallePersonajeComponent } from './personajes/detalle-personaje/detalle-personaje.component';
import { DetalleLugarComponent } from './lugares/detalle-lugar/detalle-lugar.component';
import { DetalleEpisodioComponent } from './episodios/detalle-episodio/detalle-episodio.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/personajes',
    pathMatch: 'full'
  },
  {
    path: 'personajes',
    component: PersonajesComponent,
  },
  {
    path: 'detallePersonaje/:id',
    component: DetallePersonajeComponent,
  },
  {
    path: 'lugares',
    component: LugaresComponent,
  },
  {
    path: 'detalleLugar/:id',
    component: DetalleLugarComponent,
  },
  {
    path: 'episodios',
    component: EpisodiosComponent,
  },
  {
    path: 'detalleEpisodio/:id',
    component: DetalleEpisodioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
