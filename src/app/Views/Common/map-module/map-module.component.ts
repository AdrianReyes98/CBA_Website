import { Component, OnInit,Inject,Input } from '@angular/core';
import { latLng } from 'leaflet';

@Component({
  selector: 'app-map-module',
  templateUrl: './map-module.component.html',
  styleUrls: ['./map-module.component.scss']
})
export class MapModuleComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: -1.2449722676037696,
      lng:  -78.60745217922444
  };

<<<<<<< HEAD
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
      var latitud=event.latLng?.toJSON().lat;
      var longitud= event.latLng?.toJSON().lng;

      console.log(latitud)
      console.log(longitud)
  }


  




=======
  zoom = 13;
>>>>>>> a96cec57aa8b1e104888e11b94005ce94faf989d
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }
    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }


}
