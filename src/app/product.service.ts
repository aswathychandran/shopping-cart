import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import{IProduct} from './productinterface'
import{Observable,Subject} from 'rxjs';
import{map,tap} from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http:HttpClient
  cart:any[]=[]
  constructor( http:HttpClient) { 
    this.http=http
  }

  // getProduct(){
  //  return this.http.get("http://localhost:4200/assets/product.json")
  // }

  getproducts(){
    return this.http.get("http://localhost:4200/assets/product.json").pipe(
      map((data))=> <IProduct[]>data),
      tap(data => console.log(JSON.stringify(data)));
    
  }
}
