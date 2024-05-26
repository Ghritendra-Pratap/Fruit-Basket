import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../admin/products/service/product.service';
import { LoginService } from '../../admin/login/service/login.service';
import { Router } from '@angular/router';
import { CartService } from '../cart/service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private prodService: ProductService ,
    private loginService :LoginService,
  private router : Router,
  private cartService : CartService){}

  Products : any;

  
  ngOnInit(): void {
    this.getProducts()
  }

  userId : string = this.loginService.getUserId()

  getProducts(){
    this.prodService.getProducts().subscribe(res=>{
      this.Products = res
      console.log(this.Products)
      console.log(this.userId)
    })
  }

  addToCart(prodId:string){
    this.cartService.addToCart(prodId , this.userId).subscribe(res=>{
      console.log(res)
    })
  }

  goToCart(){
    this.router.navigateByUrl("cart")
  }
}
