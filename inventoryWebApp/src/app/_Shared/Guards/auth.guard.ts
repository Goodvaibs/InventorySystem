import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //Here the auth guard will be written based on the auth api
    /* 
      Example
      if(token.present) {
        return true // will activate the route if auth details are present
      }
      return false // if no auth details are present it will not allow the route
    */
    return true;
  }
  
}
