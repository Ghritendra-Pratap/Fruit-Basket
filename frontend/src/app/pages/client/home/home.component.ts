import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../admin/products/service/product.service';
import { LoginService } from '../../admin/login/service/login.service';
import { Router } from '@angular/router';
import { CartService } from '../cart/service/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  filteredProducts: any;
  category: any='';
  minPrice: any=0;
  maxPrice: any=100000;
  categories:any;

  constructor(
    private prodService: ProductService ,
    private loginService :LoginService,
  private router : Router,
  private cartService : CartService){}

  Products : any;

  
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  userId : string = this.loginService.getUserId()

  getCategories(){
    this.prodService.getallCategories().subscribe(res=>{
      console.log(res)
      this.categories = res
    })
  }

  getProducts(){
    this.prodService.getProducts().subscribe(res=>{
      this.Products = res
      this.filteredProducts = this.Products
    })
  }

  applyFilters(){
    
    this.filteredProducts = this.Products.filter((product:any) => 
      (!this.category || product.category === this.category) &&
      (!this.minPrice || product.price >= this.minPrice) &&
      (!this.maxPrice || product.price <= this.maxPrice),
      
    );
  }

  addToCart(prodId:string){
    console.log(prodId)
    this.cartService.addToCart(prodId , this.userId).subscribe(res=>{
      console.log(res)
    })
  }

  goToCart(){
    this.router.navigateByUrl("cart")
  }
}
