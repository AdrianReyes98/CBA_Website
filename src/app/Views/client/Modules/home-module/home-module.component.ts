import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogAgreementsRegisterComponent } from 'src/app/Views/register/dialog-agreements-register/dialog-agreements-register.component';
import { DialogNewUserComponent } from './dialog-new-user/dialog-new-user.component';
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
    this.openDialognewUser();
  }

  openDialogRequest(){
    const dialogRef = this.dialog.open( DialogRequestComponent, {
      width: '650px',
      height:'705px',
      panelClass: 'no-padding-dialog',
    });
  }
  
  openDialognewUser(){
    var user = (JSON.parse(localStorage.getItem('user')!));
    if(user.client.newUser){
      const dialogRef = this.dialog.open( DialogNewUserComponent,  {
        disableClose: true,
         width: '600px',
         panelClass: 'no-padding-dialog',
       });
    }
  }
}


