import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiLoginService } from 'src/app/Services/api-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    public username: string = "";
    public password: string = "";
    public isLoading: boolean = false;
    
    constructor(
      public apiLogin: ApiLoginService,
      public dialog: MatDialog,
      public snackBar: MatSnackBar,
      private router: Router
    ){

    }

  ngOnInit(): void {

  }

  login(): void{
    this.isLoading = true;
    if(this.username.length == 0 || this.password.length == 0){
      this.snackBar.open("ERROR: Campos Vacios", 'Aceptar',{
        duration: 3000
      });
      this.isLoading = false;
    }

    this.apiLogin.login(this.username, this.password).subscribe(response => {
      if(response.status === 1){
        this.router.navigate(['/'+response.data.role])
      }else{
        this.snackBar.open("ERROR: "+response.result, 'Aceptar',{
          duration: 3000
        });
        this.isLoading = false;
      }
    });


  } 

  openRegister(){
    this.router.navigate(['/register'])
  }
  

}
