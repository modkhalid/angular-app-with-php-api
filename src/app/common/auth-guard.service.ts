import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
      private route: Router,
      private service: AuthService) { }

  canActivate( state: RouterStateSnapshot) {
    if (this.service.isLogin()) {
      return true;
    }
    this.route.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }

}
