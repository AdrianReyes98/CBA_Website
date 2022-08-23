import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/Models/User';
import { ApiUsersService } from 'src/app/Services/api-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  formUser: any;
  hide = true;
  id: number = 0;
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    
  }


  returnLogin(){
    this.router.navigate(['/login'])
  }


  buildFormAdd(){
    this.formUser = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      user: ['',[Validators.required]],
      name: ['',[Validators.required]],
      password: ['',[Validators.required]],
      address: [''],
      phone: ['',[Validators.maxLength(10),Validators.minLength(10), Validators.required]],
      role: ['',Validators.required],
      identification: ['',[Validators.maxLength(10),Validators.minLength(10)]]
    });
  }
}
