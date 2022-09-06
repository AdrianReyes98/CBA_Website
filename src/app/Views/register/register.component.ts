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
      password: ['',[Validators.required]],
      identification: ['',[Validators.maxLength(10),Validators.minLength(10),Validators.required]]
    });
  }

  addUserService(){
    const user: User = {
      id: this.id,
      usuario1: this.formUser.value.user,
      contraseña: this.formUser.value.password,
      nombre: this.formUser.value.name,
      email: this.formUser.value.email,
      direccion: this.formUser.value.address,
      telefono: this.formUser.value.phone,
      cedula: this.formUser.value.identification,
      idRol: 2
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
}
