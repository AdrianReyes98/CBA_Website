import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiLoginService } from "../Services/api-login.service";


@Injectable()
export class JwtInterceptor implements HttpInterceptor{

    constructor(private apiUserService: ApiLoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = this.apiUserService.userData;
        if(user){
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`
                }
            })
        }
        return next.handle(req);
    }
}