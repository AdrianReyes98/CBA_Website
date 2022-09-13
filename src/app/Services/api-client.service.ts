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

  url: string = "https://prevencioncbd.somee.com/Client";

  constructor(
    private _http: HttpClient
  ) {}

  newClient(client: Client): Observable<Response>{
    return this._http.post<Response>(this.url, client, httpOption);
  }
}
