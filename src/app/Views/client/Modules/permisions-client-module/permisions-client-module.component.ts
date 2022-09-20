import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiPermissionService } from 'src/app/Services/api-permission.service';

@Component({
  selector: 'app-permisions-client-module',
  templateUrl: './permisions-client-module.component.html',
  styleUrls: ['./permisions-client-module.component.scss']
})
export class PermisionsClientModuleComponent implements OnInit {

  public isLoading: boolean = true;
  public search: string = "";
  public dataSource: any;
  public columns: string[]=['Id','Estado','Fecha','Actividad'];
  private listPermissions: any;


  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(
    private apiPermission: ApiPermissionService
  ) { }

  ngOnInit(): void {
    this.setPaginatorSpanish();
    this.loadData(1);
  }

  

  setPaginatorSpanish(){
    this.paginator._intl.itemsPerPageLabel="Items por página";
    this.paginator._intl.firstPageLabel = 'Primera página';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.paginator._intl.nextPageLabel = 'Siguiente página';
    this.paginator._intl.previousPageLabel = 'Página anterior'; 
  }

  startSearch(){
  }

  setDataSource(list: any[]){
    this.dataSource = new MatTableDataSource<any>(list);
    this.dataSource.paginator = this.paginator;
  }

  loadData(id: number){
    this.apiPermission.getPermissionById(id).subscribe(response => {
      this.listPermissions = response.data;
      this.isLoading = false;

      if(response.status == 1){
        this.setDataSource(this.listPermissions);
      }
      setTimeout(() => {
        console.log("ERROR");
        this.isLoading = false;
      },20000);
    });
  }
  
}
