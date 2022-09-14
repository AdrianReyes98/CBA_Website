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

  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12
  }; 
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private confirmDialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  returnHome(){
    this.router.navigateByUrl('/Cliente/Permisos');
  }

  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
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
}
