import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  url: string = "https://prevencioncbd.somee.com/Permissions/Operation";

  constructor(
    private _http: HttpClient
  ) {}

  newOperatingPermission(permission: Permission): Observable<Response>{
    return this._http.post<Response>(this.url,permission,httpOption);
  }

}
