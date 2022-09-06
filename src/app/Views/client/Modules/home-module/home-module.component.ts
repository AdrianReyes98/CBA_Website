import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogRequestComponent } from './dialog-request/dialog-request.component';

@Component({
  selector: 'app-home-module',
  templateUrl: './home-module.component.html',
  styleUrls: ['./home-module.component.scss']
})
export class HomeModuleComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }



  openDialogRequest(){
    const dialogRef = this.dialog.open( DialogRequestComponent, {
      width: '1100px',
      panelClass: 'no-padding-dialog',
      
    });
    
  }
}
