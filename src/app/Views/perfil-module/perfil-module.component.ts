import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputDialogComponent } from '../Common/input-dialog/input-dialog.component';

@Component({
  selector: 'app-perfil-module',
  templateUrl: './perfil-module.component.html',
  styleUrls: ['./perfil-module.component.scss']
})
export class PerfilModuleComponent implements OnInit {

  constructor(
    public matInputDialog: MatDialog
  ){}

  ngOnInit(): void {

  }

  openInputDialog(){
    const dialogRef = this.matInputDialog.open(InputDialogComponent,{
      width: '600px'
    });
  }
}
