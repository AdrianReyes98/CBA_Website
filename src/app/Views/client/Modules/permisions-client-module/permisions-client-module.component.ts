import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permisions-client-module',
  templateUrl: './permisions-client-module.component.html',
  styleUrls: ['./permisions-client-module.component.scss']
})
export class PermisionsClientModuleComponent implements OnInit {

  public isLoading: boolean = true;
  public search: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  startSearch(){
    
  }

}
