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
  branchesDataURL: string = 'http://localhost:3000/branch';
  homeImages: string = 'http://localhost:3000/homeImages';

  getDepartments(): Observable<any> {
    return this.http.get<any>(this.DepartmentsURL);
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.ProductsURL);
  }
  getAboutData(): Observable<any> {
    return this.http.get<any>(this.aboutDataURL);
  }
  getBranches(): Observable<any> {
    return this.http.get<any>(this.branchesDataURL);
  }
  getHomeImages(): Observable<any> {
    return this.http.get<any>(this.homeImages);
  }
}
