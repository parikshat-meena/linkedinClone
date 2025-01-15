import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  fetchUserData(schema: string): Observable<any> {
    return this.http.get(`${this.URL}/${schema}`);
  }

  insertData(schema: string, user: any): Observable<any> {
    return this.http.post(`${this.URL}/${schema}`, user);
  }

  deleteUserData(schema: string, id: any): Observable<any> {
    return this.http.delete(`${this.URL}/${schema}/${id}`);
  }

  updateUserData(schema: string, user: any, id: string): Observable<any> {
    return this.http.put(`${this.URL}/${schema}/${id}`, user);
  }
}
