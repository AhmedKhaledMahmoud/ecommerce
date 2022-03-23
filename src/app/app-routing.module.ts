import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './user/components/products/product-details/product-details.component';
import { ProductsComponent } from './user/components/products/products.component';
import { CategoriesComponent } from './user/components/categories/categories.component';
import { CartComponent } from './user/components/cart/cart.component';
import { WishlistComponent } from './user/components/wishlist/wishlist.component';
import { CompareComponent } from './user/components/compare/compare.component';
import { LoginComponent } from './user/components/auth/login/login.component';
import { RegisterComponent } from './user/components/auth/register/register.component';
import { HomeComponent } from './page/home/home.component';
import { ProfileComponent } from './user/components/profile/profile.component';
import { AuthGuardGuard } from './user/guards/auth-guard.guard';
import { CheckoutComponent } from './user/components/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
  },
  {
    path: 'profile',
    component:ProfileComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
  },
  { path: 'products', component: ProductsComponent },

  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  // { path: 'checkout', component: CheckoutComponent,canActivate: [AuthGuardGuard] },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'compare', component: CompareComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
