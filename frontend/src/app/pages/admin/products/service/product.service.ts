import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  headers = new HttpHeaders({
    Authorization: `${localStorage.getItem("authToken")}`,
  });

  addProduct(product:any){
    return this.http.post("api/product" , product)
  }

  getProducts(){
    return this.http.get("api/product")
  }

  removeProduct(){

  }

  updateProduct(){
    
  }

  

}
