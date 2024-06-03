import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { HomeComponent } from './pages/client/home/home.component';
import { RegisterComponent } from './pages/admin/register/register.component';
import { CartComponent } from './pages/client/cart/cart.component';
import { WebProductComponent } from './pages/client/web-product/web-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar';
import { LandingpageComponent } from './pages/client/landingpage/landingpage.component';
import { CardComponent } from './pages/client/card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './pages/client/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent,
        LayoutComponent,
        ProductsComponent,
        UsersComponent,
        HomeComponent,
        RegisterComponent,
        CartComponent,
        WebProductComponent,
        LandingpageComponent,
        CardComponent,
        CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    NgbModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
