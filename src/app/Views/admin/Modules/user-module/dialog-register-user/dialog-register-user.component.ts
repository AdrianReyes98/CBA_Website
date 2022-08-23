import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/Models/User';
import { ApiUsersService } from 'src/app/Services/api-users.service';

@Component({
  selector: 'app-dialog-register-user',
  templateUrl: './dialog-register-user.component.html',
  styleUrls: ['./dialog-register-user.component.scss']
})
export class DialogRegisterUserComponent{

  formUser: any;
  hide = true;

  constructor(
    public dialogRef: MatDialogRef<DialogRegisterUserComponent>,
    public apiClient: ApiUsersService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      user: ['',[Validators.required]],
      name: ['',[Validators.required]],
      password: ['',[Validators.required]],
      address: [''],
      phone: ['',[Validators.maxLength(10),Validators.minLength(10), Validators.required]],
      role: ['',Validators.required],
      identification: ['',[Validators.maxLength(10),Validators.minLength(10)]]
    })
  }

  closeDialog(){
    this.dialogRef.close();
  }

  addOrEditUser(){
    const user: User = {
      usuario1: this.formUser.value.user,
      contraseña: this.formUser.value.password,
      nombre: this.formUser.value.name,
      email: this.formUser.value.email,
      direccion: this.formUser.value.address,
      telefono: this.formUser.value.phone,
      cedula: this.formUser.value.identification,
      idRol: this.formUser.value.role
    };
    this.addUserService(user);
  }

  addUserService(user: User){
    this.apiClient.addUser(user).subscribe(response => {
      if( response.status === 1 ){
        this.dialogRef.close();
        this.snackBar.open(response.result+': Usuario insertado con Exito', '',{
          duration: 2000
        });
      }else{
        this.snackBar.open(response.result+': El Usuario no se inserto', '',{
          duration: 2000
        });
      }
    })
  }

  updateUserService(user: User){
    this.apiClient.updateUser(user).subscribe(response => {
      if( response.status === 1 ){
        this.dialogRef.close();
        this.snackBar.open(response.result+': Usuario insertado con Exito', '',{
          duration: 2000
        });
      }else{
        this.snackBar.open(response.result+': El Usuario no se inserto', '',{
          duration: 2000
        });
      }
    })
  }

}
