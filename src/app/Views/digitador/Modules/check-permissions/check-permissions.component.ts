import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiPermissionService } from 'src/app/Services/api-permission.service';
import { ConfirmDialogComponent } from 'src/app/Views/Common/confirm-dialog/confirm-dialog.component';
import { InputDialogComponent } from 'src/app/Views/Common/input-dialog/input-dialog.component';
import { History } from 'src/app/Models/History';

@Component({
  selector: 'app-check-permissions',
  templateUrl: './check-permissions.component.html',
  styleUrls: ['./check-permissions.component.scss']
})
export class CheckPermissionsComponent implements OnInit {
  protected permission: any;
  
  
  constructor(
    public confirmDialog: MatDialog,
    public inputDialog: MatDialog,
    private router: Router,
    public apiPermission: ApiPermissionService
  ) { }

  ngOnInit(): void {
  this.loadData();
    
  }
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  public lati:any;
  public long: any;

  center: google.maps.LatLngLiteral = {
    lat: -1.25,
    lng:  -78.60745217922444
};

zoom = 15;
  markerOptions: google.maps.MarkerOptions={
    draggable: false
  };

  markerPositions: google.maps.LatLngLiteral[] = [];

  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker); 
  }

  acceptPermission(){
    const dialogRef = this.confirmDialog.open(ConfirmDialogComponent, {
      width: '410px',
      data: {title: 'PERMISO ACEPTADO', message: 'Esta seguro que desea aceptar este permiso ?'}
    });

    dialogRef.afterClosed().subscribe( result => {
      if(result){

        localStorage.removeItem('permission');
        this.router.navigateByUrl('/Digitador/Permission');
      }
    });
  }


  rejectPermission(){
    const dialogRef = this.inputDialog.open(InputDialogComponent, {
      width: '410px',
      data: {title: 'PERMISO RECHAZADO', message: 'Escriba el motivo del rechazo'}
    });

    dialogRef.afterClosed().subscribe( result => {
      if(result){
        localStorage.removeItem('permission');
        this.router.navigateByUrl('/Digitador/Permission');
      }
    });
  }

  finishPermission(action:string, description: string){
    const history: History = {
      accion: action,
      descripccion:description,
      idPerm: this.permission.id
    }

    this.apiPermission.checkedPermission().subscribe(result =>{
      
    })
  }

  loadData(){
    this.permission=JSON.parse(localStorage.getItem('permission')!);
    this.markerPositions.push({lat: this.permission.idLocNavigation.coordernadaX, lng: this.permission.idLocNavigation.coordenadaY});
    this.center = {
      lat:  this.permission.idLocNavigation.coordernadaX,
      lng: this.permission.idLocNavigation.coordenadaY
    }
    console.log(this.permission)
  }
}

