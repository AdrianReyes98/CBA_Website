import { Component,  Input,  OnInit, SimpleChanges } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatDialog} from '@angular/material/dialog';
import { Router} from '@angular/router';
import { Permission } from 'src/app/Models/Permission';
import { ConfirmDialogComponent } from 'src/app/Views/Common/confirm-dialog/confirm-dialog.component';
import { ApiPermissionService } from 'src/app/Services/api-permission.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-operating-permits',
  templateUrl: './operating-permits.component.html',
  styleUrls: ['./operating-permits.component.scss']
})
export class OperatingPermitsComponent implements OnInit {

  private user:any=JSON.parse(localStorage.getItem('user')!);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private confirmDialog: MatDialog,
    private apiPermission:ApiPermissionService,
    private snackbar: MatSnackBar,
  ) { }

  protected isLinear = true;
  isLoading = false;
  coords: string = "";
  ubicationCompleted: boolean = false;


  checkDataClient(){
    if(!this.firstFormGroup.valid){
                      this.snackbar.open("Existen datos faltantes en el formulario",'Aceptar',{
        duration: 2000
      })
    }
  }

  checkUbication(map: boolean){
    if(this.coords.length != 0){
      this.ubicationCompleted = true;
    }else{
      if(!map){
        this.snackbar.open("Aun no se registro una ubicacion",'',{
          duration: 2000
        });
      }
    }
  }

  firstFormGroup = this.formBuilder.group({

    ruc:[this.user.client.ruc,[Validators.required]],
    completeName: [this.user.client.nombres + ' '+ this.user.client.apellidos,[Validators.required]],
    phone:[this.user.client.telefono,[Validators.required]],
    mail:[this.user.email,[Validators.required]],
    economicActivity: ['', [Validators.required,Validators.minLength(10)]],
    name: ['',[Validators.required, Validators.minLength(5)]],
    socialReason: ['', [Validators.required, Validators.minLength(10)]],

  });

  documentsFormGroup = this.formBuilder.group({
    rucDocument: ['',Validators.required],
    localPicture: ['',Validators.required],
    localDocument: ['',Validators.required]
  });


  ngOnInit(): void {
  }

  returnHome(){
    this.router.navigateByUrl('/Cliente/Permisos');
  }

  LoadClient(){
  }


  //Finalizar el permiso
  finishPermission(){
    const dialogRef = this.confirmDialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {title: 'Finalizar', message: 'Esta seguro que desea finalizar este permiso ?'}
    });

    dialogRef.afterClosed().subscribe( result => {
      if(result){
        this.registerPermission();
      }
    });

  }

  //Registrar el Permiso
  registerPermission(){
    this.isLoading = true;

    const latlng = this.coords.split(',');

    console.log(latlng);
    console.log(this.documentsFormGroup.value.localDocument);

    
    const permission: Permission = {

      "idSubCat": 1,
      "economicActivity": this.firstFormGroup.value.economicActivity!,
      "rucCopy": this.documentsFormGroup.value.rucDocument!,
      "name": this.firstFormGroup.value.name!,
      "address": this.firstFormGroup.value.mail,
      "coordinateX": parseFloat(latlng[0]),
      "coordinateY": parseFloat(latlng[1]),
      "state": "Ingresado",
      "socialReason": this.firstFormGroup.value.socialReason!,
      "photo": this.documentsFormGroup.value.localPicture!,
      "property": this.documentsFormGroup.value.localDocument!,
      "idCli": this.user.client.id
      
    }

    this.apiPermission.newOperatingPermission(permission).subscribe(response => {

      if(response.status == 1){
        this.snackbar.open('Permiso Registrado: '+response.result, '',{
          duration: 2000
        });
        this.returnHome();
      }else{
        this.snackbar.open('Permiso NO Registrado: '+response.result, 'Aceptar',{
          duration: 2000
        });
      }
      this.isLoading = false;
    });
  }



}
