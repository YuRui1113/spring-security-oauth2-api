/**
 * File: src\app\services\auth\authentication.service.ts
 * Project: AngularClient
 * Created Date: Wednesday, March 13th 2024, 2:42:25 pm
 * Author: Rui Yu (yurui_113@hotmail.com)
 * -----
 * Last Modified: Wednesday, 13th March 2024 3:32:18 pm
 * Modified By: Rui Yu (yurui_113@hotmail.com>)
 * -----
 * Copyright (c) 2024 Rui Yu
 * -----
 * HISTORY:
 * Date                     	By       	Comments
 * -------------------------	---------	----------------------------------------------------------
 * Wednesday, March 13th 2024	Rui Yu		Initial version
 */


import { Injectable, OnDestroy } from '@angular/core';
import { User, UserManager, UserManagerSettings } from 'oidc-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService implements OnDestroy {

  private readonly STORAGE_KEY_RETURN_URL = 'returnUrl';

  constructor() { console.log('AuthenticationService instance was created.'); }
  ngOnDestroy() { console.log('AuthenticationService instance was destroyed.'); }

  isUserDefined = false;
  private _user: User | null | undefined;
  private _userManager: UserManager | undefined;

  isLoggedIn() {
    this.getUserManager();
    return this._user != null && !this._user.expired;
  }

  getAccessToken() {
    return this._user ? this._user.access_token : '';
  }

  getClaims() {
    return this._user?.profile;
  }

  getUserName(): any {
    return this._user ? this._user.profile.name : 'not authenticated';
  }

  getIdToken(): string {
    return this._user ? this._user.id_token : '';
  }

  startAuthentication(): Promise<void> {
    this.getUserManager();
    return this._userManager!.signinRedirect();
  }

  completeAuthentication() {
    this.getUserManager();
    return this._userManager!.signinRedirectCallback().then((user) => {
      this._user = user;
      this.isUserDefined = true;
    });
  }

  startLogout(): Promise<void> {
    this.getUserManager();
    return this._userManager!.signoutRedirect();
  }

  completeLogout() {
    this.getUserManager();
    this._user = null;
    return this._userManager!.signoutRedirectCallback();
  }


  silentSignInAuthentication() {
    this.getUserManager();
    return this._userManager!.signinSilentCallback();
  }


  private getUserManager() {
    if (!this._userManager) {
      const userManagerSettings: UserManagerSettings = environment.authConfig!;
      this._userManager = new UserManager(userManagerSettings);

      this._userManager.getUser().then((user) => {
        this._user = user;
        this.isUserDefined = true;
      });
    }
  }

  setReturnUrl(returnUrl: string): void {
    localStorage.setItem(this.STORAGE_KEY_RETURN_URL, returnUrl);
  }

  getReturnUrl(): string {
    let returnUrl: string | null = localStorage.getItem(this.STORAGE_KEY_RETURN_URL);
    if (returnUrl === null) {
      returnUrl = 'home';
    }

    //returnUrl = "home";
    return returnUrl.startsWith('/') ? returnUrl : `/${returnUrl}`;
  }
}
