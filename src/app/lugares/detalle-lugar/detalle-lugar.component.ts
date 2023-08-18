import { Component } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-detalle-lugar',
  templateUrl: './detalle-lugar.component.html',
  styleUrls: ['./detalle-lugar.component.scss']
})
export class DetalleLugarComponent {

  constructor(private rickAndMortyService: RickAndMortyService, private _router: ActivatedRoute,) {
    this.id = this._router.snapshot.params.id;
    this.detalleLugar();
  }

  public lugar:any=[];
  private id;
  
  detalleLugar() {
    this.rickAndMortyService.detalleLugar(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.lugar = data;
      }
    )
  }

}
