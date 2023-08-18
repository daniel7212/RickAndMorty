import { Component } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.scss']
})
export class LugaresComponent {

  constructor(private rickAndMortyService: RickAndMortyService) { }

  lugar: any[] = [];

  ngOnInit() {
    this.lugares();
  }

  lugares() {
    this.rickAndMortyService.lugares().subscribe(
      (data: any) => {
        console.log(data);
        this.lugar = data.results;
      }
    )
  }

}
