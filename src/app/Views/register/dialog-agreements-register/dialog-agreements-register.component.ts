import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-agreements-register',
  templateUrl: './dialog-agreements-register.component.html',
  styleUrls: ['./dialog-agreements-register.component.scss']
})
export class DialogAgreementsRegisterComponent implements OnInit {

  ischeck:boolean=false
  
  constructor(
    public dialogRef: MatDialogRef<DialogAgreementsRegisterComponent>
  ) { }

  ngOnInit(): void {
  }
  Cerrar(){
    this.dialogRef.close();
  }

 
  
}
