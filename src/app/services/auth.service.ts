import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public setToken(token: string) {
    localStorage.setItem(environment.tokenKey, token);
    console.log(this.getToken());
  }

  public getToken() {
    return localStorage.getItem(environment.tokenKey);
  }

  checkAvailability(): boolean {
    const auth = this.getToken();
    return !!auth;
  }

  public authorize(token) {
    this.setToken(token);
  }

  public getRole() {
    const payload = jwt_decode(this.getToken());
    console.log(payload);
  }

  public logout() {
    localStorage.removeItem(environment.tokenKey);
    console.log('TOKEN DELETED');
  }

}
