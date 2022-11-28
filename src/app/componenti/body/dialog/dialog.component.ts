import { Component, Output, EventEmitter, Inject, OnInit, Input} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css']
})
export class DialogComponent implements OnInit {

  gif: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.gif = data.gif;
    console.log(data)
  }

  ngOnInit(): void {
  }

}
