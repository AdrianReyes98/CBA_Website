import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import {Client} from 'src/app/Models/Client';
import { ApiUsersService } from 'src/app/Services/api-users.service';
import{ApiClientService} from 'src/app/Services/api-client.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogAgreementsRegisterComponent } from './dialog-agreements-register/dialog-agreements-register.component';

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
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.buildFormAdd();

    
  }


  returnLogin(){
    this.router.navigate(['/login'])
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);

    
  }

  
  
  buildFormAdd(){
   
      this.formClient = this.formBuilder.group({
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required,Validators.minLength(8)]],
        identification: ['', [Validators.required, Validators.minLength(10)]],  
        recaptcha: ['',Validators.required],
        ruc: ['']
      });

      
      
  }
  

  addClientService(){
    
    var type: string= 'Natural'; 
    var ruc = this.formClient.value.identification + "001";

    if(!this.element){
      type='Juridica';
      ruc= this.formClient.value.ruc;
    }

    const client: Client = {
      email: this.formClient.value.email,
      ruc: ruc,
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
        ruc: ['',[Validators.maxLength(13),Validators.minLength(13),Validators.required]],
        recaptcha: ['',Validators.required]
      });
    }else{
      this.element = true;
      this.formClient = this.formBuilder.group({
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required,Validators.minLength(8)]],
        identification: ['', [Validators.required, Validators.minLength(10)]],  
        recaptcha: ['',Validators.required],
        ruc: ['']
      });
      
      
    }
  }

  openDialogRequest(){
    
    const dialogRef = this.dialog.open( DialogAgreementsRegisterComponent,  {
      disableClose: true,
      width: '1000px',
      height:'700px',
      panelClass: 'no-padding-dialog',
    });
    dialogRef.afterClosed().subscribe( result => {
      if(result){
        this.addClientService();
      }
 
    });
  }

  
}
  

