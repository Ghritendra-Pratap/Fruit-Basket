import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  constructor(private prodService : ProductService){}

  product:any={};
  Products:any;
  modal : boolean= false

  
  productForm :FormGroup = new FormGroup({
    title:new FormControl(this.product ? this.product.title : '', [Validators.required]),
    category:new FormControl(this.product ? this.product.category : '', [Validators.required]),
    mrprice:new FormControl(this.product ? this.product.mrprice : '', [Validators.required]),
    price:new FormControl(this.product ? this.product.price : '', [Validators.required]),
  })

  headers = new HttpHeaders({
    Authorization: `${localStorage.getItem("authToken")}`,
  });

  ngOnInit(): void {
    this.getProducts()
    
  }

  onSubmit(){
    this.prodService.addProduct(this.productForm.value).subscribe(res=>{
      console.log(res)
    })
  }
  
  getProducts(){
    this.prodService.getProducts().subscribe(res=>{
      this.Products = res
      console.log(this.Products)
    })
  }

  updateProduct(product:any){
    this.product = product
    this.productForm.patchValue({
      title: this.product.title,
      category: this.product.category,
      mrprice: this.product.mrprice,
      price: this.product.price
    });
    console.log(this.productForm.value)
    this.modal = !this.modal
    if(this.modal == false){
      this.productForm.reset();
    }
  }

  removeProduct(prodId:string){
    console.log(prodId)
  }
}
