import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; 
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
  element = true;
  
  constructor(
    private router: Router,
    public apiClient: ApiUsersService,
    public snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildFormAdd();
  }


  returnLogin(){
    this.router.navigate(['/login'])
  }


  buildFormAdd(){
      this.formUser = this.formBuilder.group({
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required,Validators.minLength(8)]],
        identification: ['',[Validators.maxLength(10),Validators.minLength(10),Validators.required]],
        ruc: ['']
      });
  }

  addUserService(){
    const user: User = {
      id: this.id,
      contraseña: this.formUser.value.password,
      email: this.formUser.value.email,
      ruc: this.formUser.value.ruc,
      cedula: this.formUser.value.identification
    };
    this.apiClient.addUser(user).subscribe(response => {
      if( response.status === 1 ){
        this.snackBar.open(response.result+': Usuario insertado con Exito', '',{
          duration: 2000
        });
        this.returnLogin();
      }else{
        this.snackBar.open(response.result+': El Usuario no se inserto', '',{
          duration: 2000
        });
      }
    })
  }

  hideData() {
    if(this.element){
      this.element = false;
      this.formUser = this.formBuilder.group({
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required,Validators.minLength(8)]],
        identification: [''],
        ruc: ['',[Validators.maxLength(13),Validators.minLength(13),Validators.required]]
      });
    }else{
      this.element = true;
      
    }
  }
}
  

