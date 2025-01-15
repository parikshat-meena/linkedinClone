import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  private isUserLoggedIn = false;

  login() {
    this.isUserLoggedIn = true;
  }
  logout() {
    this.isUserLoggedIn = false;
  }

  isLogged(): boolean {
    return this.isUserLoggedIn;
  }
}
