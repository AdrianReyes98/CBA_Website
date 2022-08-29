import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ApiUsersService } from 'src/app/Services/api-users.service';
import { DialogRegisterUserComponent } from './dialog-register-user/dialog-register-user.component';
import { MatDialogRef} from '@angular/material/dialog';
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
  public columns: string[] = ['Id','Nombre','Cedula','Usuario','Role', 'Email', 'Direccion', 'Telefono','Acciones'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private apiUser: ApiUsersService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.isLoading = true;
    this.apiUser.getUsers().subscribe(response => {
      this.listUsers = response.data;
      this.isLoading = false;
      this.setDataSource(this.listUsers);
    });
  }

  searchUser(){
    this.searchList = [];
    this.listUsers.forEach(element => {
      if(element.nombre.toUpperCase().startsWith(this.search.toUpperCase())){
        this.searchList.push(element);
      }
    });
    this.setDataSource(this.searchList);
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
      width: '600px'
    });
    dialogRef.afterClosed().subscribe( result => {
      this.getUsers();
    });
  }

  openDialogUpdateUser(user: any){
    const dialogRef = this.dialog.open( DialogRegisterUserComponent, {
      width: '600px',
      data: user
    });
    dialogRef.afterClosed().subscribe( result => {
      this.getUsers();
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
