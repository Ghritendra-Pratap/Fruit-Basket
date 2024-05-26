import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { HomeComponent } from './pages/client/home/home.component';
import { RegisterComponent } from './pages/admin/register/register.component';
import { CartComponent } from './pages/client/cart/cart.component';

const routes: Routes = [
  {path:"", redirectTo:"login" , pathMatch:'full'},
  {path:"login", component:LoginComponent},
  {path:"layout", component:LayoutComponent},
  {path:"products" , component:ProductsComponent},
  {path:"users" , component:UsersComponent},
  {path:"home" , component:HomeComponent},
  {path:"register" , component:RegisterComponent},
  {path:"cart" , component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
