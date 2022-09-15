import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router} from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/Views/Common/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-operating-permits',
  templateUrl: './operating-permits.component.html',
  styleUrls: ['./operating-permits.component.scss']
})
export class OperatingPermitsComponent implements OnInit {

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
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private confirmDialog: MatDialog
    ) { }

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
        this.returnHome();
      }
    })
  }

  //Registrar el Permiso
  registerPermission(){
    
  }


}
