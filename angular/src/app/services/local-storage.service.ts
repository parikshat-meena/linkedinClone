import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  // save data to local storage
  setToken(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // retrieve data from local storage
  getToken(key: string) {
    const item = localStorage.getItem(key);

    // return item;
    return item ? JSON.parse(item) : null;
  }

  // for removing single key value pair
  removeToken(key: string) {
    localStorage.removeItem(key);
  }

  // for removing all the key value pairs
  clearAllTokens() {
    localStorage.clear();
  }
}
