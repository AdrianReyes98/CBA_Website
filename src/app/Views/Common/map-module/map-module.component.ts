import { Component, OnInit,Inject,Input } from '@angular/core';

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

  zoom = 12;
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }
    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }


}
