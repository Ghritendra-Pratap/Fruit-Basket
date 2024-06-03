import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../admin/products/service/product.service';
import { LoginService } from '../../admin/login/service/login.service';
import { Router } from '@angular/router';
import { CartService } from '../cart/service/cart.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  filteredProducts: any;
  category: any='';
  minPrice: any=0;
  maxPrice: any=100000;
  categories: any;
  Products: any;
  seasonalProducts: any[] = [];
  importedProducts: any[] = [];
  localProducts: any[] = [];
  dryFruitProducts: any[] = [];
  

  constructor(private prodService: ProductService,
    private loginService: LoginService,
    private router: Router,
    private cartService: CartService,
  ) {
    
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getCategories() {
    this.prodService.getallCategories().subscribe(res => {
      console.log(res);
      this.categories = res;
    });
  }

  getProducts() {
    this.prodService.getProducts().subscribe(res => {
      this.Products = res;
      this.filterProducts();
      console.log(this.importedProducts)
    });
  }

  filterProducts() {
    for (const product of this.Products) {
      if (product.category === 'seasonal') {
        this.seasonalProducts.push(product);
      } else if (product.category === 'imported') {
        this.importedProducts.push(product);
      } else if (product.category === 'local') {
        this.localProducts.push(product);
      } else if (product.category === 'dry') {
        this.dryFruitProducts.push(product);
      }
    }

    // Apply limits
    this.seasonalProducts = this.applyLimit(this.seasonalProducts, 'seasonal');
    this.importedProducts = this.applyLimit(this.importedProducts, 'imported');
    this.localProducts = this.applyLimit(this.localProducts, 'local');
    this.dryFruitProducts = this.applyLimit(this.dryFruitProducts, 'dryfruit');
  }

  // Apply limits to the filtered arrays
  applyLimit(products: any[], category: string): any[] {
    if (products.length > 4) {
      return products.slice(0, 4);
    }
    return products;
  }

  updateCategory(category: string) {
    this.category = category;
    this.applyFilters();
  }

  applyFilters() {
    console.log(this.category);
    this.filteredProducts = this.Products.filter((product: any) =>
      product.category === this.category
    );
  }

  
}
