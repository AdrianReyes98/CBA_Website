import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspections',
  templateUrl: './inspections.component.html',
  styleUrls: ['./inspections.component.scss']
})
export class InspectionsComponent implements OnInit {


  public isLoading: boolean = false;
  protected search: string = "";
  protected dataSource: any;
  public columns: string[] = ['Id','Cedula','Role', 'Email','Acciones'];
  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }

  startSearch(){
  }

  openDialogAddUser(){
  }

}
