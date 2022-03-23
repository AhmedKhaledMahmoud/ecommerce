import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IProduct } from '../../models/i-product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.apiUrl}/products/`);
  }

  getAllProductsByCategoryId(categoryId: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${environment.apiUrl}/products?categoryId=${categoryId}`
    );
  }

  getProductById(ProductId: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(
      `${environment.apiUrl}/products/${ProductId}`
    );
  }
}
