import { Component, OnDestroy, OnInit } from '@angular/core';
import { GiphysoftService } from 'src/app/servizi/giphysoft.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-spaziogif',
  templateUrl: './spaziogif.component.html',
  styleUrls: ['./spaziogif.component.css']
})
export class SpaziogifComponent implements OnInit, OnDestroy {

  public spaziogif: any[] = [];
  subscription: Subscription = new Subscription;
  id: any;

  labelPosition: 'ascending' | 'descending' | 'default' = 'default';

  constructor( private servizio: GiphysoftService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.servizio.trendGifs();
    this.servizio.mostraGifs()
    .subscribe((response:any) => {
      this.spaziogif = response;
    });

  }

  ascending(allGifs: any){
    var result = allGifs.sort(function(a: any, b: any) {
      return parseFloat(a.import_datetime) - parseFloat(b.import_datetime);
    });
    console.log(result)
  }

  descending(allGifs: any){
    var result = allGifs.sort(function(a: any, b: any) {
      return parseFloat(b.import_datetime) - parseFloat(a.import_datetime);
    });
    console.log(result)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    }

  openDialog(id: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        gif: this.spaziogif.find((gif) => gif.id == id)
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
