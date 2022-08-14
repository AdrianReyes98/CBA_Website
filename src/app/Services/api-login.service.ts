import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../Models/Response';

const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  url: string = "https://localhost:7221/User/login";

  constructor(
    private _http: HttpClient
  ) {}

  login(username: string, password: string):Observable<Response>{
    return this._http.post<Response>(this.url,{username,password},httpOption)
  }
}
