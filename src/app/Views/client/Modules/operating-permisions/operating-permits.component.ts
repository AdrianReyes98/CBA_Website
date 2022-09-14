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
