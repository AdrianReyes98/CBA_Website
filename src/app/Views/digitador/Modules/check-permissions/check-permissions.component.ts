import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiPermissionService } from 'src/app/Services/api-permission.service';
import { ConfirmDialogComponent } from 'src/app/Views/Common/confirm-dialog/confirm-dialog.component';
import { InputDialogComponent } from 'src/app/Views/Common/input-dialog/input-dialog.component';
import { History } from 'src/app/Models/History';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    public apiPermission: ApiPermissionService,
    public snackbar: MatSnackBar
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

zoom = 18;
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
      data: {title: 'ACEPTAR PERMISO', message: 'Esta seguro que desea aceptar este permiso ?'}
    });

    dialogRef.afterClosed().subscribe( result => {
      if(result){
        this.finishPermission('Aceptado','Su solicitud a sido revisada y aceptada, espere una inspección en los proximos días')
        localStorage.removeItem('permission');
        this.router.navigateByUrl('/Digitador/Permission');
      }
    });
  }


  rejectPermission(){
    const dialogRef = this.inputDialog.open(InputDialogComponent, {
      width: '410px',
      data: {title: 'RECHAZAR PERMISO', message: 'Escriba el motivo del rechazo'}
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log(result)

      if(result != undefined){
        this.finishPermission("Rechazado",result)
        localStorage.removeItem('permission');
        this.router.navigateByUrl('/Digitador/Permission');
      }             

    });
  }

  finishPermission(action:string, description: string){
    const history: History = {
      accion: action,
      descripcion:description,
      idPerm: this.permission.id
    }

    console.log(history)
    this.apiPermission.checkedPermission(history).subscribe(result =>{
      if (result.status == 1){
        this.snackbar.open( 'La solicitud se actualizo correctamente','Aceptar',{duration:2000 })
      }else{
        this.snackbar.open( 'Hubo un error al actualizar la solicitud','Aceptar',{duration:2000 })
      }
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

