import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ApiUsersService } from 'src/app/Services/api-users.service';
import { DialogRegisterUserComponent } from './dialog-register-user/dialog-register-user.component';
import { ConfirmDialogComponent } from 'src/app/Views/Common/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user-module',
  templateUrl: './user-module.component.html',
  styleUrls: ['./user-module.component.scss']
})
export class UserModuleComponent implements OnInit {

  public isLoading: boolean = true;
  public search: string = "";
  public searchList: any[] = [];
  public listUsers: any[] = [];  
  public columns: string[] = ['Id','Cedula','Role', 'Email','Acciones'];
  protected dataSource: any;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(
    private apiUser: ApiUsersService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.setPaginatorSpanish();
    this.getUsers();
  }

  setPaginatorSpanish(){
    this.paginator._intl.itemsPerPageLabel="Items por página";
    this.paginator._intl.firstPageLabel = 'Primera página';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.paginator._intl.nextPageLabel = 'Siguiente página';
    this.paginator._intl.previousPageLabel = 'Página anterior'; 
  }

  getUsers(){
    this.isLoading = true;
    this.apiUser.getUsers().subscribe(response => {
      this.listUsers = response.data;
      this.isLoading = false;
      this.setDataSource(this.listUsers);
    });
  }

  startSearch(){
    this.searchList = [];
    this.serchUserByName();
    if(this.searchList.length == 0){
      this.searchUserByUsername();
    }
    if(this.searchList.length == 0){
      this.searchUserByIdentification();
    }
    if(this.searchList.length == 0){
      this.searchUserByEmail();
    }
    this.setDataSource(this.searchList);
  }

  serchUserByName(){
    this.listUsers.forEach(element => {
      if(element.nombre.toUpperCase().startsWith(this.search.toUpperCase())){
        this.searchList.push(element);
      }
    });
    return this.searchList;
  }

  searchUserByUsername(){
    this.listUsers.forEach(element => {
      if(element.usuario1.toUpperCase().startsWith(this.search.toUpperCase())){
        this.searchList.push(element);
      }
    });
  }

  searchUserByEmail(){
    this.listUsers.forEach(element => {
      if(element.email.toUpperCase().startsWith(this.search.toUpperCase())){
        this.searchList.push(element);
      }
    });
  }

  searchUserByIdentification(){
    this.listUsers.forEach(element => {
      if(element.cedula.toUpperCase().startsWith(this.search.toUpperCase())){
        this.searchList.push(element);
      }
    });
  }

  setDataSource(list: any[]){
    this.dataSource = new MatTableDataSource<any>(list);
    this.dataSource.paginator = this.paginator;
  }

  deleteUser(id:number){
    this.apiUser.deleteUser(id).subscribe(response => {
      this.getUsers();
      this.setDataSource(this.listUsers);
    });
  }
  
  openDialogAddUser(){
    const dialogRef = this.dialog.open( DialogRegisterUserComponent, {
      width: '600px',
      panelClass: 'no-padding-dialog'
    });

    dialogRef.afterClosed().subscribe( result => {
      this.getUsers();
    });
  }
  
  openDialogUpdateUser(user: any){
    const dialogRef = this.dialog.open( DialogRegisterUserComponent, {
      width: '600px',
      panelClass: 'no-padding-dialog',
      data: user
    });
    dialogRef.afterClosed().subscribe( result => {
      this.getUsers();
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string,id:number): void {
    
    const dialogRef=this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(result=>{
      if (result){
        console.log(id);
        this.deleteUser(id);
      }
      })
  }

}
