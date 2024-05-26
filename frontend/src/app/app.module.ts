import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { HomeComponent } from './pages/client/home/home.component';
import { RegisterComponent } from './pages/admin/register/register.component';
import { CartComponent } from './pages/client/cart/cart.component';
import { WebProductComponent } from './pages/client/web-product/web-product.component';

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
        WebProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
