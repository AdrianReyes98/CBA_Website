import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client } from 'src/app/Models/Client';
import { ApiClientService } from 'src/app/Services/api-client.service';

@Component({
  selector: 'app-dialog-new-user',
  templateUrl: './dialog-new-user.component.html',
  styleUrls: ['./dialog-new-user.component.scss']
})
export class DialogNewUserComponent implements OnInit {
  formUser: any;
  public isLoading: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private apiClient: ApiClientService,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogNewUserComponent>,

  ) { }

  ngOnInit(): void {
    this.buildFormAddClient()
  }

  buildFormAddClient(){
    this.formUser = this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      lastname:['',[Validators.required,Validators.minLength(5)]],
      address:['',[Validators.required]],
      phone:['',[Validators.required]]
      });
  }

  updateClient(){
    const client : Client= {
     id: (JSON.parse(localStorage.getItem('user')!).client.id),
      name: this.formUser.value.name,
      lastName: this.formUser.value.lastname,
      address:this.formUser.value.address,
      phone:this.formUser.value.phone,
      newUser: false
    }
    this.isLoading = true;
    this.apiClient.updateDataClient(client).subscribe(response => {
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
    });
  }
}
