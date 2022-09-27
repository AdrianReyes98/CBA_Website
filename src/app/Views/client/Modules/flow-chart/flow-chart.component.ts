import { Component, Inject, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-flow-chart',
  templateUrl: './flow-chart.component.html',
  styleUrls: ['./flow-chart.component.scss']
})
export class FlowChartComponent implements OnInit {
  
  public listHistory: any[] = [{Accion: 'Ingreso',Descripcion: 'Ingresooo',Fecha: '2022-09-21'},
                              {Accion: 'Finalizado',Descripcion: 'Finalizado', Fecha: '2022-09-21'},
                              {Accion: 'Finalizado',Descripcion: 'Finalizado', Fecha: '2022-09-21'},
                              {Accion: 'Finalizado',Descripcion: 'Finalizado', Fecha: '2022-09-21'}];

  
  
  constructor() { }

  ngOnInit(): void {
  
  }

}
