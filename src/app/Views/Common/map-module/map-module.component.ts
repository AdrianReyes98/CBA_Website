import { Component, OnInit,Inject,Input } from '@angular/core';

@Component({
  selector: 'app-map-module',
  templateUrl: './map-module.component.html',
  styleUrls: ['./map-module.component.scss']
})
export class MapModuleComponent implements OnInit {

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  
  constructor() {
  }

  ngOnInit(): void {
  }

}
