import { Component } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent {

  constructor( private rickAndMortyService : RickAndMortyService ) { 
    this.personajes(); 
  }

  public personaje:any = [];

  personajes(){
    this.rickAndMortyService.personajes().subscribe(
      (data: any)=>{
        console.log(data);
        this.personaje=data.results;
      }
    )
  }

}
