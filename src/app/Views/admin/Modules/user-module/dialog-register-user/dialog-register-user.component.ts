import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/Models/User';
import { ApiUsersService } from 'src/app/Services/api-users.service';

@Component({
  selector: 'app-dialog-register-user',
  templateUrl: './dialog-register-user.component.html',
  styleUrls: ['./dialog-register-user.component.scss']
})
export class DialogRegisterUserComponent{

  user: string = "";
  name: string = "";
  password: string = "";
  address: string = "";
  email:string = "";
  phone: string = "";
  identification: string = "";

  constructor(
    public dialogRef: MatDialogRef<DialogRegisterUserComponent>,
    public apiClient: ApiUsersService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  }


  addUser(){
    const user: User = {
      usuario1: this.user,
      contraseña: this.password,
      nombre: this.name,
      email: this.email,
      direccion: this.address,
      telefono: this.phone,
      cedula: this.identification,
      idRol: 2
    };
    console.log(user);
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

}
