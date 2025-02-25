import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import axios from "axios";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ImageUploadService {
  private API_URL = "http://127.0.1:4500/images";

  private http = inject(HttpClient); // Inject HttpClient

  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append("image", file);
    console.log(file, formData, "form datat");
    return this.http.post(`${this.API_URL}`, formData);
  }

  getImages(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }
}
