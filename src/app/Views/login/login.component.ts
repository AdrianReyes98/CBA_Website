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
    public isLoading: boolean = false;
    
    constructor(
      public apiLogin: ApiLoginService,
      private router: Router
    ){
      if(this.apiLogin.userData){
        this.router.navigate(['/'+this.apiLogin.userData.role])
      }
    }

  ngOnInit(): void {

  }

  login(): void{
    this.isLoading = true;
    this.apiLogin.login(this.username, this.password).subscribe(response => {
      if(response.status === 1){
        this.router.navigate(['/'+response.data.role])
      }
      this.isLoading = false;
    });
  }

}
