import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiLoginService } from 'src/app/Services/api-login.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

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
