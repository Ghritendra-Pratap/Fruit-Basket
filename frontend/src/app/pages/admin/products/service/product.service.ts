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
    return this.http.post("/api/product" , product,{headers : this.headers})
  }

  getProducts(){
    return this.http.get("/api/product",{headers : this.headers})
  }

  removeProduct(prodId:string){
    return this.http.delete("/api/product/"+ prodId,{headers : this.headers})
  }

  updateProduct(prodId:string,product:any){
    return this.http.put("/api/product/"+prodId, product, {headers : this.headers})
  }

  getallCategories(){
    return this.http.get("/api/category" , {headers : this.headers})
}

  getCategoryName(catId :string){
    return this.http.get("/api/category/"+catId , {headers : this.headers})
  }

  

}
