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

  constructor(private prodService : ProductService){
    
  }

 
  Products:any;
  modal : boolean= false;
  newProductSlide: boolean =false
  categories:any=[];
  category:string='';
  filteredProducts:any;
  maxPrice:any;
  minPrice:any;
  prodId:any;
  

  
  productForm :FormGroup = new FormGroup({
    title:new FormControl('', [Validators.required]),
    category:new FormControl( '', [Validators.required]),
    mrprice:new FormControl('', [Validators.required]),
    price:new FormControl('', [Validators.required]),
  })

  headers = new HttpHeaders({
    Authorization: `${localStorage.getItem("authToken")}`,
  });

  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
    
  }

  getCategories(){
    this.prodService.getallCategories().subscribe(res=>{
      console.log(res)
      this.categories = res
    })
  }


  newSlide(){
    this.newProductSlide = !this.newProductSlide
  }

  onSubmit(){
    
    if(this.prodId){
      this.prodService.updateProduct(this.prodId,this.productForm.value).subscribe()
      
      this.prodId='';
      
      
    }
    else{
      this.filteredProducts.push(this.productForm.value)
      this.prodService.addProduct(this.productForm.value).subscribe(res=>{
        console.log(res)
      })
    }
    this.productForm.reset()
    this.newSlide()
    
    
  }
  
  getProducts(){
    this.prodService.getProducts().subscribe(res=>{
      this.Products = res
      this.filteredProducts = this.Products;
      console.log(this.Products)
    })
  }

  applyFilters(){
    
    this.filteredProducts = this.Products.filter((product:any) => 
      (!this.category || product.category === this.category) &&
      (!this.minPrice || product.price >= this.minPrice) &&
      (!this.maxPrice || product.price <= this.maxPrice)
    );
  }

  updateProduct(product:any , index : number){
    this.newSlide()
    this.prodId = product._id
        this.productForm.patchValue({
          title: product.title,
          category: product.category,
          mrprice: product.mrprice,
          price: product.price
        });
        this.modal = !this.modal
        if(this.modal == false){
          this.productForm.reset();
        }
      
    
    
  }

  removeProduct(prodId:string, index: number){
    this.filteredProducts.splice(index , 1)
    this.prodService.removeProduct(prodId).subscribe(res=>{
      console.log(res)
      
    }
    
    )
  }

}
