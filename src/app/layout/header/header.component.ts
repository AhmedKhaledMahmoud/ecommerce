import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '../../models/i-category';
import { AuthenticationService } from '../../user/services/authentication.service';
import { CartService } from '../../user/services/cart.service';
import { CategoriesService } from '../../user/services/categories.service';
import { CompareService } from '../../user/services/compare.service';
import { WishlistService } from '../../user/services/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  categoriesList: ICategory[];
  countCartItem:number;
  userInfo: any;

  constructor(
    private router: Router,
    private categoriesService: CategoriesService,
    private authenticationService:AuthenticationService,
    private cartService:CartService,
    private wishlistService:WishlistService,
    private compareService:CompareService
  ) {
    
  }

  ngOnInit(): void {
    this.categoriesService
      .getAllCategories()
      .subscribe((categories) => (this.categoriesList = categories));  
      
       this.userInfo = localStorage.getItem('userInfo');
      this.userInfo = JSON.parse(this.userInfo)

  }

  countCartItems(){
  
    return this.cartService.countCartNumber();
     
  }

  countWishlistItems(){
  
    return this.wishlistService.countWishlistNumber();
     
  }

  countCompareItems(){
  
    return this.compareService.countCompareNumber();
     
  }

  isLoggedIn(){
    return this.authenticationService.isLoggedIn();
  }

  logout(){
    this.authenticationService.logout();
  }
}
