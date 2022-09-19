import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiLoginService } from '../Services/api-login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(private router: Router,
    private apiUserService: ApiLoginService){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const user = this.apiUserService.userData;
    
      if(user){
        return this.checkUserRole(route);
      }
      this.router.navigate(['/login']);
      return false;
  }

  checkUserRole(route: ActivatedRouteSnapshot): boolean{
    const user = this.apiUserService.userData;
    
    if(user.role.match(route.data['role'])){
      return true;
    }else{
      this.router.navigate(['/noaccess'])
      return false;
    }
  }
  
}
