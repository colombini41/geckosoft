import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphysoftService {

  gifs = new BehaviorSubject<any>([]);

  constructor( private connection: HttpClient) { }

  trendGifs (){
    return this.connection.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.chiaveAPI}&limit=48`)
    .subscribe((response:any) =>{
      this.gifs.next(response.data);
    });
  }

  searchedGifs (parole: string){
    return this.connection.get(`https://api.giphy.com/v1/gifs/search?q=${parole}&api_key=${environment.chiaveAPI}&limit=48`)
    .subscribe((response:any) =>{
      this.gifs.next(response.data);
      console.log(this.gifs)
    });
  }

  mostraGifs(){
    return this.gifs.asObservable();
  }

}
