import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { History } from '../Models/History';
import { Permission } from '../Models/Permission';
import { Response } from '../Models/Response';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiPermissionService {

  url: string = "https://prevencioncbd.somee.com/Permissions";

  constructor(
    private _http: HttpClient
  ) {}

  newOperatingPermission(permission: Permission): Observable<Response>{
    return this._http.post<Response>(this.url+"/Operation",permission,httpOption);
  }

  getPermissionById(id: number): Observable<Response>{
    return this._http.get<Response>(this.url+'/'+id,httpOption);
  } 

  getAllPermission():Observable<Response>{
    return this._http.get<Response>(this.url +'/all/InsertedPermission',httpOption);
  }

  checkedPermission(history: History):Observable<Response>{
    return this._http.post<Response>(this.url+"/checkedPermission",history,httpOption);
  }

  aceptedPermission():Observable<Response>{
    return this._http.get<Response>(this.url+"/all/InspectedPermission")
  }
  
}
