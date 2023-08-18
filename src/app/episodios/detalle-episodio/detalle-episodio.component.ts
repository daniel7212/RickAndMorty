import { Component } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-episodio',
  templateUrl: './detalle-episodio.component.html',
  styleUrls: ['./detalle-episodio.component.scss']
})
export class DetalleEpisodioComponent {

  constructor(private rickAndMortyService: RickAndMortyService, private _router: ActivatedRoute,) {
    this.id = this._router.snapshot.params.id;
    this.detalleEpisodio();
  }

  public episodio:any=[];
  private id;
  
  detalleEpisodio() {
    this.rickAndMortyService.detalleEpisodio(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.episodio = data;
      }
    )
  }

}
