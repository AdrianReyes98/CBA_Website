import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiLoginService } from 'src/app/Services/api-login.service';
import { ApiUsersService } from 'src/app/Services/api-users.service';
import { InputDialogComponent } from '../Common/input-dialog/input-dialog.component';

@Component({
  selector: 'app-perfil-module',
  templateUrl: './perfil-module.component.html',
  styleUrls: ['./perfil-module.component.scss']
})
export class PerfilModuleComponent implements OnInit {

  public user: any = JSON.parse(localStorage.getItem('user')!);
  public email: string = this.user.email;
  public role: string = this.user.role;
  public phone: string = this.user.client.telefono;
  public username: string = this.user.client.nombres+ ' ' + this.user.client.apellidos;
  public name: string=this.user.client.nombres;
  public lastname: string=this.user.client.apellidos;
  public identification: string = this.user.client.cedula;
  public address:string= this.user.client.direccion;
  
  
  constructor(
    public apiUser: ApiUsersService,
    public matInputDialog: MatDialog
  ){}

  ngOnInit(): void {
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
        this.apiUser.updateUser(this.user);
      }
    });
  }
}
