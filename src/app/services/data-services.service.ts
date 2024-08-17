import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServicesService {
  constructor(private http: HttpClient) {}
  DepartmentsURL: string = 'http://localhost:3000/departments';
  ProductsURL: string = 'http://localhost:3000/products';
  aboutDataURL: string = 'http://localhost:3000/about';

  getDepartments(): Observable<any> {
    return this.http.get<any>(this.DepartmentsURL);
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.ProductsURL);
  }
  getAboutData(): Observable<any> {
    return this.http.get<any>(this.aboutDataURL);
  }
}
