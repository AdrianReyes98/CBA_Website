import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiLoginService } from 'src/app/Services/api-login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  user: any;
  public username: string = "";
  constructor(
    private apiUserLogin: ApiLoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.username = this.user.email.toUpperCase();
  }

  logOut(): void{
    this.apiUserLogin.logOut();
    this.router.navigate(['/login'])
  }

}
