import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiLoginService } from 'src/app/Services/api-login.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.scss']
})
export class SupervisorComponent implements OnInit {
  user: any;
  public username: string = "";
  rol: any
  public role: string = "";
  constructor(
    private apiUserLogin: ApiLoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.role = JSON.parse(localStorage.getItem('role')!)
    this.username = this.user.email.toUpperCase();
    this.rol = this.user.role;
  }

  logOut(): void{
    this.apiUserLogin.logOut();
    this.router.navigate(['/login'])
  }
}
