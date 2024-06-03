import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './pages/client/cart/service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fruit Basket';

  constructor(private router :Router, private cartService : CartService){}
  goToCart(){
    this.router.navigateByUrl("cart")
  }

  login(){
    this.router.navigateByUrl("/login")
  }
}
