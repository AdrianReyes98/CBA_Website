import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-permissions',
  templateUrl: './check-permissions.component.html',
  styleUrls: ['./check-permissions.component.scss']
})
export class CheckPermissionsComponent implements OnInit {
  protected permission: any;
  
  constructor(
  ) { }

  ngOnInit(): void {
  this.loadData();
    
  }


  loadData(){
    this.permission=JSON.parse(localStorage.getItem('permission')!);
    //localStorage.removeItem('permission');
    console.log(this.permission)
  }
}

