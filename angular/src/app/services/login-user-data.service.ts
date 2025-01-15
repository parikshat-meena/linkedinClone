import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginUserDataService {
  loginInUser = {};
  constructor() {}

  saveLoginUser(userData: any) {
    this.loginInUser = userData;
    console.log(userData, 'storing value');
  }

  getUserDetails() {
    console.log(this.loginInUser, 'user fetching');
    return this.loginInUser;
  }
}
