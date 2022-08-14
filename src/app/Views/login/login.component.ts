import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiLoginService } from 'src/app/Services/api-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    public username: string = "";
    public password: string = "";
    public isLoading: boolean = true;
    
    constructor(
      public apiLogin: ApiLoginService,
      private router: Router
    ){

    }

  ngOnInit(): void {

  }

  login(): void{
    this.apiLogin.login(this.username, this.password).subscribe(response => {
      if(response.status === 1){
        this.router.navigate(['/home'])
      }
    });
  }

}
