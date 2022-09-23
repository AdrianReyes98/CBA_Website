import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-flow-chart',
  templateUrl: './flow-chart.component.html',
  styleUrls: ['./flow-chart.component.scss']
})
export class FlowChartComponent implements OnInit {
  
 
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  
  }

  step = 0;
  setStep(index: number) {
    this.step = index;
  }
}
