import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { SessionStorageService } from '../../services/session-storage.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  USER_KEY = 'user';
  MOBILE_NO = 'mobileNo';
  constructor(
    private router: Router,
    private localService: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginService.login();
  }
  navigateToUser() {
    const queryParams = {
      name: `User${1}`,
      role: 'Admin',
    };

    // this.router.navigate(['/user', 123]); // Navigates to 'user/123'
    // this.router.navigate(['/pipe'], { queryParams: { id: 123 } });
    this.router.navigate(['/pipe'], { queryParams });
  }
  saveData() {
    console.log('save data in local storage');
    this.localService.setToken(this.USER_KEY, { fname: 'xyz', id: '1' });

    this.sessionStorage.setToken(this.MOBILE_NO, { mobileNo: 9179621901 });
  }
  getData() {
    const userData = this.localService.getToken(this.USER_KEY);
    const mobileNo = this.sessionStorage.getToken(this.MOBILE_NO);
    console.log('load Data : ', userData);
    console.log('load mobileNO from session storage: ', mobileNo);
  }

  removeData() {
    this.localService.removeToken(this.USER_KEY);
    this.sessionStorage.removeToken(this.MOBILE_NO);
    console.log('removed data of', this.USER_KEY);
  }

  clearData() {
    this.sessionStorage.clearAllTokens();
    this.localService.clearAllTokens();
    console.log('cleared all data ');
  }
}
