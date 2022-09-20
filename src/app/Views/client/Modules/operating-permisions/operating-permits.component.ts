import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private confirmDialog: MatDialog,
    private apiPermission:ApiPermissionService,
    private snackbar: MatSnackBar
  ) { }

  firstFormGroup = this.formBuilder.group({
    economicActivity: ['', [Validators.required,Validators.minLength(10)]],
    name: ['',[Validators.required, Validators.minLength(5)]],
    socialReason: ['', [Validators.required, Validators.minLength(10)]],

  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl:['']
  });


  isLinear = false;

  ngOnInit(): void {
    
  }

  returnHome(){
    this.router.navigateByUrl('/Cliente/Permisos');
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
    })
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
      "idCli": 1
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
