import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  setToken(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  // retrieve data from local storage
  getToken(key: string) {
    const item = sessionStorage.getItem(key);

    // return item;
    return item ? JSON.parse(item) : null;
  }

  // for removing single key value pair
  removeToken(key: string) {
    sessionStorage.removeItem(key);
  }

  // for removing all the key value pairs
  clearAllTokens() {
    sessionStorage.clear();
  }
}
