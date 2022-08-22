import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../Models/Response';
import { User } from '../Models/User';

const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {


  url: string = "https://prevencioncbd.somee.com/User";


  constructor(
    private _http: HttpClient
  ) { }

  getUsers(): Observable<Response>{
    return this._http.get<Response>(this.url);
  }

  deleteUser(id:number): Observable<Response>{
    return this._http.delete<Response>(this.url+'/'+id);
  }

  addUser(user: User): Observable<Response>{
    return this._http.post<Response>(this.url, user,httpOption);
  }

  updateUser(user: User): Observable<Response>{
    return this._http.put<Response>(this.url, user, httpOption);
  }
}
