import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopDataService {

  constructor(private httpClient: HttpClient) {}

  getTableData(): Observable<any> {
    return this.httpClient.get<any>('https://fakestoreapi.com/products');
  }
}
