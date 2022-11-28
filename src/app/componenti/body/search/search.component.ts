import { Component, OnInit, Input } from '@angular/core';
import { GiphysoftService } from 'src/app/servizi/giphysoft.service';
import { SpaziogifComponent } from '../spaziogif/spaziogif.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() gif: any;
  @Input() spaziogif: any;

  constructor (private servizio: GiphysoftService) {}

  ngOnInit(): void {
  }

  mostraGif(inserite: string){
    if(inserite !== '' ){
      this.servizio.searchedGifs(inserite);
    } else {
      this.servizio.trendGifs();
    }
  }
}
