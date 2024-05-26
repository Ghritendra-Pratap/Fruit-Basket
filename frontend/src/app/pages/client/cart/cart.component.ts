import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../admin/products/service/product.service';
import { LoginService } from '../../admin/login/service/login.service';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private prodService:ProductService,
    private loginService : LoginService,
    private cartService : CartService
  ){}

  ngOnInit(): void {
    this.getItems()
  }

  products:any;
  cart:any;
  userId : string = this.loginService.getUserId()
  userAddress :any = this.loginService.getUserAddress()
  

  getItems(){
    this.cartService.goToCart(this.userId).subscribe(res=>{
      this.cart = res
      console.log(this.userAddress[0])
    })
  }

  checkOut(){
    this.products=[];
    this.cart.forEach((item: any)=>{
      let product = item.product._id
      let quantity = item.quantity
      this.products.push({product , quantity})
    })
    this.cartService.postOrder(this.products , this.userAddress[0] , this.userId ).subscribe(res=>{
      console.log(res)
    })
    this.cart.splice()
    console.log("Order has been received")
  }

}
