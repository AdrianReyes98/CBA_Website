import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiLoginService } from 'src/app/Services/api-login.service';
import { InputDialogComponent } from '../Common/input-dialog/input-dialog.component';

@Component({
  selector: 'app-perfil-module',
  templateUrl: './perfil-module.component.html',
  styleUrls: ['./perfil-module.component.scss']
})
export class PerfilModuleComponent implements OnInit {
  public user: any;
  public email: string = "";
  public role: string = "";
  public username: string = "";
  public phone: string = "";
  public name: string = "";
  public identification: string = "";
  public address: string = "";
  
  

  
  constructor(
    public matInputDialog: MatDialog
  ){}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.email = this.user.email;
    this.role = this.user.role;
    this.username = this.user.username;
    this.phone = this.user.phone;
    this.name=this.user.name;
    this.identification=this.user.identification;
    this.address= this.user.address;
  }

  openInputDialog(messageHTML: String, changeHTML: String){
    const dialogRef = this.matInputDialog.open(InputDialogComponent,{
      width: '300px',
      data: {
        change: changeHTML,
        message: messageHTML
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        
      }
    });
  }
}
