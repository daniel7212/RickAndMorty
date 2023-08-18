import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  public url=environment.url;
  public headers = new HttpHeaders(
    {
      "Content-Type": "application/json;charset=UTF-8"
    }
  );

  constructor(private http: HttpClient) { }
  
  personajes(){
    const path = this.url+"/character";
    return this.http.get(path,{ headers:this.headers });
  }

  lugares(){
    const path = this.url+"/location";
    return this.http.get(path,{ headers:this.headers });
  }

  episodios(){
    const path = this.url+"/episode";
    return this.http.get(path,{ headers:this.headers });
  }

  detallePersonaje(id:number){
    const path = this.url+"/character/"+id;
    return this.http.get(path,{ headers:this.headers });
  }

  detalleLugar(id:number){
    const path = this.url+"/location/"+id;
    return this.http.get(path,{ headers:this.headers });
  }

  detalleEpisodio(id:number){
    const path = this.url+"/episode/"+id;
    return this.http.get(path,{ headers:this.headers });
  }
}
