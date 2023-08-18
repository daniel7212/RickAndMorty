import { Component } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss']
})
export class EpisodiosComponent {

  constructor(private rickAndMortyService: RickAndMortyService) { }

  episodio: any[] = [];

  ngOnInit() {
    this.episodios();
  }

  episodios() {
    this.rickAndMortyService.episodios().subscribe(
      (data: any) => {
        console.log(data);
        this.episodio = data.results;
      }
    )
  }


}
