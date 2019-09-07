import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})


export class AuthorizationGuard implements CanActivate, CanActivateChild {

  constructor(private service: ServiceService, private router: Router) {}


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    
    const allowedRoles = next.data.allowedRoles;
    const isAuthorized = this.service.isAuthorized(allowedRoles);
  
  if (!isAuthorized) {
      this.router.navigate(['login']);
    }
  
  return isAuthorized;
  }
      
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const allowedRoles = next.data.allowedRoles;
    const isAuthorized = this.service.isAuthorized(allowedRoles);
  
  if (!isAuthorized) {
      this.router.navigate(['login']);
    }
  
  return isAuthorized
  }
}
