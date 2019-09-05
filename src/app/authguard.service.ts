import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuardService  {

  private jwtHelper = new JwtHelperService();


  constructor(public router: Router) {}

  canActivate(): boolean {


    if (!this.isAuthenticated()) {

      console.log('authenticated')
    
      return false;
    } else {

      return true;
    }
  
  }

  public isAuthenticated(): boolean {

    const token = localStorage.getItem('auth_token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}