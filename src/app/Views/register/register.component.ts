import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/Models/User';
import {Client} from 'src/app/Models/Client';
import { ApiUsersService } from 'src/app/Services/api-users.service';
import{ApiClientService} from 'src/app/Services/api-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  formUser: any;
  formClient:any;
  hide = true;
  id: number = 0;
  element = true;
  
  constructor(
    private router: Router,
    public apiClient: ApiUsersService,
    public apiNewClient: ApiClientService,
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
      this.formClient = this.formBuilder.group({
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required,Validators.minLength(8)]],
        identification: ['', [Validators.required, Validators.minLength(10)]],  
        ruc: ['']
      });
      
  }

  



  addClientService(){

    console.log(this.formClient)
     var type: string= 'Natural'; 
     if(this.element){
      type='Juridica';
     }
    const client: Client = {
      email: this.formClient.value.email,
      ruc: this.formClient.value.ruc,
      password: this.formClient.value.password,
      identification:this.formClient.value.identification,
      type: type
    };
    
    this.apiNewClient.newClient(client).subscribe(response => {
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
      this.formClient = this.formBuilder.group({
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
  

