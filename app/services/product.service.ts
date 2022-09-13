import { Injectable } from '@angular/core';
import {Products } from './../models/product.model';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions={
    Headers:new HttpHeaders({'Content-Type':'Application/json'})
  };
  apiUrl='https://60afe0271f26610017ffd733.mockapi.io/products';
  constructor(private http:HttpClient) { }

  getAllProduct(): Observable<Products[]>{
    return this.http.get<Products[]>(this.apiUrl).pipe();
  }
  searchProduct(maMH:number):Observable<Products>{
    return this.http.get<Products>(`${this.apiUrl}/${maMH}`).pipe()
  }
}
