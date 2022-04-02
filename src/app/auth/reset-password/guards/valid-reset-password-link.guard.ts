import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { map, Observable, take } from 'rxjs';

import { AuthService } from '../../../@common/services/auth.service';

@Injectable()
export class ValidResetPasswordLinkGuard implements CanActivate {
  constructor(private readonly router: Router, private readonly auth: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.validateResetPasswordLink(route.queryParamMap.get('resetPasswordToken')).pipe(
      take(1),
      map((isValid) =>
        isValid ? true : this.router.parseUrl('/auth/forgot-password?linkInvalid=true')
      )
    );
  }
}
