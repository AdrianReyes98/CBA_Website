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
  display: any;
  public lati:any;
  public long: any;
  parroquias: string[]=["---Seleccionar Sector---","Atahualpa","Atocha","Augusto Martinez","Ambatillo",
  "Constantino Fernández","Cunchibamba","Celiano Monge",
  "Ficoa",
  "Huachi Chico","Huachi Loreto","Huachi Grande",
  "Izamba",
  "Juan B.Vela",
  "La Península","La Merced","La Matriz",
  "Montalvo",
  "Pilahuin","Picaihua","Pishilata","Pasa",
  "Quisapincha",
  "Santa Rosa","San Fernando","San Bartolomé de Pinllo","San Francisco",
  "Totoras",
  "Unamuncho"
  ];
  
  sector:string="---Seleccionar Sector---";

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



  selectSector(){
      switch (this.sector) {
        case 'Atahualpa':
          this.changeU(-1.2189183978394884,-78.61194133758545)
            break;
        case 'Atocha':
          this.changeU(-1.2283910293965683, -78.62646663279291)
            break;
        case 'Augusto Martinez':
              this.changeU(-1.2178059589721315, -78.6194428980617)
                break; 
        case 'Ambatillo':
          this.changeU(-1.214758, -78.664286)
            break;
        case 'Constantino Fernández':
          this.changeU(-1.199111595181114, -78.6361742195955)
            break;
        case 'Cunchibamba':
              this.changeU(-1.127698, -78.588880)
                break; 
        case 'Celiano Monge':
          this.changeU(-1.269712, -78.633644)
            break;
        case 'Ficoa':
          this.changeU(-1.24399254077051, -78.6413123182817)
            break;
        case 'Huachi Chico':
              this.changeU(-1.2757595642738935, -78.6371219175119)
                break; 
        case 'Huachi Loreto':
          this.changeU(-1.246526, -78.621108)
            break;
        case 'Huachi Grande':
          this.changeU(-1.307485, -78.637766)
            break;
        case 'Izamba':
              this.changeU(-1.228167, -78.585279)
                break; 
        case 'Juan B.Vela':
          this.changeU(-1.243028, -78.627223)
            break;
        case 'La Península':
          this.changeU(-1.2469466902645707,-78.60766473594025)
            break;
        case 'La Merced':
              this.changeU(-1.232010, -78.618486)
                break; 
        case 'La Matriz':
          this.changeU(-1.254362, -78.623451)
            break;
        case 'Montalvo':
          this.changeU(-1.3303604823460455, -78.62804405663857)
            break;
        case 'Pilahuin':
              this.changeU(-1.298593, -78.730559)
                break; 
        case 'Picaihua':
          this.changeU(-1.275701393178524, -78.58482293139323)
            break;
        case 'Pishilata':
          this.changeU(-1.2597278562127372, -78.59428713930645)
            break;
        case 'Pasa':
              this.changeU(-1.268710, -78.732255)
                break; 
        case 'Quisapincha':
          this.changeU(-1.234444, -78.684444)
            break;
        case 'Santa Rosa':
          this.changeU(-1.2873435691084034, -78.66316440683858)
            break;
        case 'San Fernando':
              this.changeU(-1.265324082150566, -78.74635670002637)
                break; 
        case 'San Bartolomé de Pinllo':
          this.changeU(-1.2326481917794447,-78.64108996462919)
            break;
        case 'San Francisco':
              this.changeU(-1.238659, -78.627006)
                break; 
        case 'Totoras':
          this.changeU(-1.304460, -78.603574)
            break;
        case 'Unamuncho':
              this.changeU(-1.166310, -78.588335)
                break; 
                
        
        default:
          this.center = {
            lat: -1.2449722676037696,
            lng:  -78.60745217922444
          }; 
          this.zoom=12;
          
    }
    
    }
  changeU(x:number,y:number){
    this.center={ 
      lat:x,
      lng:y
    }
    this.zoom= 16;
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
      "coordinateX": this.lati,
      "coordinateY": this.long,
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
