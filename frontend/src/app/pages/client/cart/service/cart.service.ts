import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }
  headers = new HttpHeaders({
    Authorization: `${localStorage.getItem("authToken")}`,
  });

  getItemsInCart(id:string){
    return this.http.get("/api/cart/items/"+id , {headers: this.headers})
  }

  addToCart(prodId:string, userId:string, quantity:number =1){
    console.log(prodId)
    return this.http.post("/api/cart/"+userId, {prodId,quantity}, {headers:this.headers})
  }

  goToCart(userId:string){
    console.log(userId)
    return this.http.get("/api/cart/"+userId , {headers:this.headers})
  }





  deleteItemFromCart(){
    
  }

  postOrder(products: any , address:string , userId:string){
    return this.http.post("/api/cart/order" , {products, address , customerId : userId}, {headers:this.headers})
  
  }
}
