import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  id: number = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogRegisterUserComponent>,
    public apiClient: ApiUsersService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    if(this.data != null){
      this.buildFormUpdate();
    }else{
      this.buildFormAdd();
    }
  }

  buildFormUpdate(){
    this.id = this.data.id;
    this.formUser = this.formBuilder.group({
      email: [this.data.email,[Validators.required,Validators.email]],
      password: ['',[Validators.required]],
      identification: [this.data.cedula,[Validators.maxLength(10),Validators.minLength(10), Validators.required]]
    });
  }

  buildFormAdd(){
    this.formUser = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]],
      identification: ['',[Validators.maxLength(10),Validators.minLength(10),Validators.required]]
    });
  }

  closeDialog(){
    this.dialogRef.close();
  }

  addOrEditUser(){
    const user: User = {
      id: this.id,
      ruc: this.formUser.value.ruc,
      contraseña: this.formUser.value.password,
      email: this.formUser.value.email,
      cedula: this.formUser.value.identification,
    };
    if(this.data != null){
      this.updateUserService(user);
    }else{
      this.addUserService(user);
    }
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
        this.snackBar.open(response.result+': Usuario actualizado con Exito', '',{
          duration: 2000
        });
      }else{
        this.snackBar.open(response.result+': El Usuario no se actualizado', '',{
          duration: 2000
        });
      }
    })
  }
}
