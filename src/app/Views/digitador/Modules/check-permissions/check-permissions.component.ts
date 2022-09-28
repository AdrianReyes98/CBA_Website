import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/Views/Common/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-check-permissions',
  templateUrl: './check-permissions.component.html',
  styleUrls: ['./check-permissions.component.scss']
})
export class CheckPermissionsComponent implements OnInit {
  protected permission: any;
  
  
  constructor(
    public confirmDialog: MatDialog
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
      data: {title: 'ACEPTAR PERMISO', message: 'Esta seguro que desea aceptar este permiso ?'}
    });

    dialogRef.afterClosed().subscribe( result => {
      if(result){

      }
    });
  }

  loadData(){
    this.permission=JSON.parse(localStorage.getItem('permission')!);
    this.markerPositions.push({lat: this.permission.idLocNavigation.coordernadaX, lng: this.permission.idLocNavigation.coordenadaY});
    //localStorage.removeItem('permission');
    this.center = {
      lat:  this.permission.idLocNavigation.coordernadaX,
      lng: this.permission.idLocNavigation.coordenadaY
    }
    console.log(this.permission)
  }
}

