import { Component, Input } from '@angular/core';
import { LoginService } from '../../admin/login/service/login.service';
import { CartService } from '../cart/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private loginService : LoginService,
          private cartService: CartService,
          private router:Router
  ){}

  @Input() product:any ;

  addToCart(prodId: string) {
    console.log(prodId);
    this.cartService.addToCart(prodId, this.loginService.getUserId()).subscribe(res => {
      console.log(res);
    });
  }

  goToCart() {
    this.router.navigateByUrl('cart');
  }


}
