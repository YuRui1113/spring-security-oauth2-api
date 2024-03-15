import { Injectable } from '@angular/core';
import { User } from '../models/auth/user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public static readonly USER_TOKEN_NAME = 'userToken';
  public static readonly ID_TOKEN_NAME = 'idToken';

  public static setIdTokenInLocalStorage(username: string, token: string): void {
    localStorage.setItem(TokenService.ID_TOKEN_NAME, JSON.stringify(
      {
        username: username,
        token: token
      })
    );
  }

  public static setUserTokenInLocalStorage(username: string, token: string): void {
    // Store username and JWT token in local storage to keep this user logged in between page refreshes
    localStorage.setItem(TokenService.USER_TOKEN_NAME, JSON.stringify(
      {
        username: username,
        token: token
      })
    );
  }

  public static getUsernameFromToken(): string {
    return TokenService.getPropertyFromLocalStorageValueOrReturnEmptyString(
      TokenService.USER_TOKEN_NAME, 'username'
    );
  }

  public static getIdToken(): string {
    return TokenService.getPropertyFromLocalStorageValueOrReturnEmptyString(
      TokenService.ID_TOKEN_NAME, 'token'
    );
  }

  public static getUserToken(): string {
    return TokenService.getPropertyFromLocalStorageValueOrReturnEmptyString(
      TokenService.USER_TOKEN_NAME, 'token'
    );
  }

  public static getCurrentUserFromUserToken(token: string): User | undefined {
    if (token) {
      const payload = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(atob(payload));
    }

    return undefined;
  }

  private static getFromLocalStorage(key: string): any {
    const jToken = localStorage.getItem(key);
    if (jToken) {
      return JSON.parse(jToken);
    }

    return null;
  }

  private static getPropertyFromLocalStorageValueOrReturnEmptyString(key: string, property: string) {
    const value = TokenService.getFromLocalStorage(key);
    const result = value && value[property];

    return result ? result : '';
  }
}
