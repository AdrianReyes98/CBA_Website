import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiLoginService } from 'src/app/Services/api-login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private apiUserLogin: ApiLoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logOut(): void{
    this.apiUserLogin.logOut();
    this.router.navigate(['/login'])
  }

}
