import { Component, OnInit } from '@angular/core';
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
    
    constructor(public apiLogin: ApiLoginService){

    }

  ngOnInit(): void {

  }

  login(): void{
    console.log(this.username);
    console.log(this.password);
    this.apiLogin.login(this.username, this.password).subscribe(response => {
      console.log(response);
    });
  }

}
