import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../Models/Response';
import { Client } from '../Models/Client';


const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ApiClientService {

  urlRegister: string = "https://prevencioncbd.somee.com/Login/register";
  urlClient: string = "https://prevencioncbd.somee.com/Client";

  constructor(
    private _http: HttpClient
  ) {}

  newClient(client: Client): Observable<Response>{
    return this._http.post<Response>(this.urlRegister, client, httpOption);
  }

  updateDataClient(client: Client): Observable<Response>{
    return this._http.put<Response>(this.urlClient,client,httpOption);
  }
}
