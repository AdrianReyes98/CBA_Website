import { Component, OnInit } from '@angular/core';

import {FormBuilder, Validators} from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 24,
      lng: 12
  };

  zoom = 4;
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }
    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }

}
