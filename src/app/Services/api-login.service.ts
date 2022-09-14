import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Response } from '../Models/Response';
import { Login } from '../Models/Login';
import { map } from 'rxjs/operators';


const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })  
};

@Injectable({
  providedIn: 'root'
})

export class ApiLoginService {

  url: string = "https://prevencioncbd.somee.com/Login/login";

  private userSubject: BehaviorSubject<Login>;

  public get userData(): Login{
    return this.userSubject.value;
  }


  constructor(
    private _http: HttpClient
  ) {
    this.userSubject = 
    new BehaviorSubject<Login>(JSON.parse(localStorage.getItem('user')!))
  }

  login(email: string, password: string):Observable<Response>{
    return this._http.post<Response>(this.url,{email,password},httpOption).pipe(
      map( res => {
        if(res.status === 1){
          const user: Login = res.data;
          localStorage.setItem('user',JSON.stringify(user));
          this.userSubject.next(user);
        }
        return res;
      })
    );
  }

  logOut(){
    localStorage.removeItem('user');
    localStorage.clear();
    this.userSubject.closed = true;
    window.location.reload();
  }

}
