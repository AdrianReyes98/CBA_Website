import { Component, Inject, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-flow-chart',
  templateUrl: './flow-chart.component.html',
  styleUrls: ['./flow-chart.component.scss']
})
export class FlowChartComponent implements OnInit {
  
  protected permission: any;
  public listHistory: any[] = [];

  
  
  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.permission = JSON.parse(localStorage.getItem('permission')!); 
    this.listHistory = this.permission.historials;
    console.log(this.listHistory);
  }
}
