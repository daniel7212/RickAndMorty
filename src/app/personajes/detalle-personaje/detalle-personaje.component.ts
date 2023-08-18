import { Component } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.scss']
})
export class DetallePersonajeComponent {

  constructor(private rickAndMortyService: RickAndMortyService, private _router: ActivatedRoute,) {
    this.id = this._router.snapshot.params.id;
    this.detallePersonaje();
  }

  public personaje:any=[];
  private id;

  ngOnInit() {
  }

  detallePersonaje() {
    this.rickAndMortyService.detallePersonaje(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.personaje = data;
      }
    )
  }

}
