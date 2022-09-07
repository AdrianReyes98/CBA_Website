import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogRequestComponent } from './dialog-request/dialog-request.component';

@Component({
  selector: 'app-home-module',
  templateUrl: './home-module.component.html',
  styleUrls: ['./home-module.component.scss']
})
export class HomeModuleComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  openDialogRequest(){
    const dialogRef = this.dialog.open( DialogRequestComponent, {
      width: '650px',
      height:'705px',
      panelClass: 'no-padding-dialog',
    });

  }
}
