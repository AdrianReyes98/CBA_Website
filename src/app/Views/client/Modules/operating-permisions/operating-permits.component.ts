import { Component,  OnInit } from '@angular/core';
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
  user:any=JSON.parse(localStorage.getItem('user')!);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private confirmDialog: MatDialog,
    private apiPermission:ApiPermissionService,
    private snackbar: MatSnackBar,
  ) { }

  isLinear = false;
  coords: string = "";

  change(){
    alert('HOLA');
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

  ubicationFormGroup = this.formBuilder.group({
    coords:[this.coords]
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

    const permission: Permission = {
      "idSubCat": 1,
      "economicActivity": this.firstFormGroup.value.economicActivity!,
      "rucCopy": "string",
      "name": this.firstFormGroup.value.name!,
      "address": "string",
      "coordinateX": 0,
      "coordinateY": 0,
      "state": "Ingresado",
      "socialReason": this.firstFormGroup.value.socialReason!,
      "photo": "string",
      "property": "string",
      "idCli": this.user.client.id
    }

    this.apiPermission.newOperatingPermission(permission).subscribe(response => {

      if(response.status == 1){
        this.snackbar.open(response.result+': Permiso Registrado', '',{
          duration: 2000
        });
        this.returnHome();
      }else{
        this.snackbar.open(response.result+': Permiso NO Registrado', '',{
          duration: 2000
        });
      }

    });
  }




}
