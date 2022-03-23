import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './user/components/products/products.component';
import { ProductDetailsComponent } from './user/components/products/product-details/product-details.component';
import { CategoriesComponent } from './user/components/categories/categories.component';
import { CartComponent } from './user/components/cart/cart.component';
import { WishlistComponent } from './user/components/wishlist/wishlist.component';
import { CompareComponent } from './user/components/compare/compare.component';
import { LoginComponent } from './user/components/auth/login/login.component';
import { RegisterComponent } from './user/components/auth/register/register.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MasterComponent } from './layout/master/master.component';
import { HomeComponent } from './page/home/home.component';
import { ProfileComponent } from './user/components/profile/profile.component';
import { CheckoutComponent } from './user/components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CategoriesComponent,
    CartComponent,
    WishlistComponent,
    CompareComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    MasterComponent,
    HomeComponent,
    ProfileComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
