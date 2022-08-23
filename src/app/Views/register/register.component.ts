import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public isLoading: boolean = false;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }


  returnLogin(){
    this.router.navigate(['/login'])
  }
}
