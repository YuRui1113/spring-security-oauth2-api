/**
 * File: src\app\auth\auth.guard.ts
 * Project: AngularClient
 * Created Date: Wednesday, March 13th 2024, 2:27:13 pm
 * Author: Rui Yu (yurui_113@hotmail.com)
 * -----
 * Last Modified: Wednesday, 13th March 2024 10:13:38 pm
 * Modified By: Rui Yu (yurui_113@hotmail.com>)
 * -----
 * Copyright (c) 2024 Rui Yu
 * -----
 * HISTORY:
 * Date                     	By       	Comments
 * -------------------------	---------	----------------------------------------------------------
 * Wednesday, March 13th 2024	Rui Yu		Initial version
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../services/auth/authentication.service';

@Injectable()
export class AuthGuard {
  constructor(private router: Router,
    private readonly authService: AuthenticationService) { }

  async canActivate(route: ActivatedRouteSnapshot, { url }: RouterStateSnapshot) {
    console.info(`canActivate:${url}`)
    if (environment.useSso) {
      let isLoggedIn = this.authService.isLoggedIn();
      if (!isLoggedIn) {
        this.authService.setReturnUrl(url);
        console.info(`return url:${url}`)
        this.authService.startAuthentication();
        console.info('after startAuthentication');
      } else {
        console.log("User already logged in");
      }
      return isLoggedIn;
    }

    return true;
  }
}
