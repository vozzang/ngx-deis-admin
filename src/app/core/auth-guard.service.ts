import { Injectable } from '@angular/core';
import {
  CanActivate, Router, Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }
  canLoad(route: Route): boolean {
    return this.checkLogin();
  }
  checkLogin(): boolean {
    console.log(this.authService.isLoggedIn);
    if (this.authService.isLoggedIn) { return true; }
    this.router.navigate(['/login']);
    return false;
  }

}
