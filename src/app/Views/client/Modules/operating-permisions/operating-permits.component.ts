import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router} from '@angular/router';
import { Permission } from 'src/app/Models/Permission';
import { ConfirmDialogComponent } from 'src/app/Views/Common/confirm-dialog/confirm-dialog.component';
import { Locale } from 'src/app/Models/Locale';
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
    
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl:['']
  });


  isLinear = false;
  display: any;
  public lati:any;
  public long: any;

  center: google.maps.LatLngLiteral = {
    lat: -1.2449722676037696,
    lng:  -78.60745217922444
  }; 
  

  ngOnInit(): void {
  }
  

  zoom = 12;
  markerOptions: google.maps.MarkerOptions={
    draggable: false
    
  };
  
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON()); 
      if (this.markerPositions.length != 1){
        console.log(this.markerPositions.reverse)
        this.markerPositions = this.markerPositions.reverse();
        this.markerPositions.pop(); 
      }
      this.lati =  (event.latLng?.toJSON().lat);
      this.long = (event.latLng?.toJSON().lng);
      

      console.log(this.lati)
  }

  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
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
      "state": "string",
      "economicActivity": "string",
      "rucCopy": "string",
      "name": "string",
      "address": "string",
      "coordinateX": 0,
      "coordinateY": 0,
      "socialReason": "string",
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
