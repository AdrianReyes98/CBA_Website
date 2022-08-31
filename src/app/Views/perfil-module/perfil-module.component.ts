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
  user: any;
  public emails: string = "";
  rol: any
  public role: string = "";
  userna:any;
  public username: string="";
  phonenumber:any;
  public phone: string="";
  nameuser: any;
  public name:string="";
  ident: any;
  public identification:string="" ;
  addr: any;
  public address:string="";
  
  

  
  constructor(
    private apiUserLogin: ApiLoginService,
    private router: Router,
    public matInputDialog: MatDialog
  ){}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.emails = this.user.email;
    this.rol = this.user.role;
    this.userna = this.user.username;
    this.phonenumber= this.user.phone;
    this.nameuser=this.user.name;
    this.ident=this.user.identification;
    this.addr= this.user.address;
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
