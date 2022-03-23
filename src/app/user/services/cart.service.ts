import { Injectable } from '@angular/core';
import { IProduct } from '../../models/i-product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IProduct[] = [];
  cart: any;
  totalPrice: number;
  keepGoing:boolean = true;
  constructor() {}

  addToCart(product: IProduct) {
    if (localStorage.getItem('cart')) {
      this.cart = localStorage.getItem('cart');
      this.items = JSON.parse(this.cart);
      this.items.push(product);
      localStorage.setItem('cart', JSON.stringify(this.items));
    } else {
      this.items = [];
      this.items.push(product);
      localStorage.setItem('cart', JSON.stringify(this.items));
    }

    this.getTotalPrice();
  }

  countCartNumber() {
    this.cart = localStorage.getItem('cart');
    this.items = JSON.parse(this.cart);
    if(this.items) {
      return this.items.length;
    } else {
      return 0
    }
  }

  getItems() {
    this.cart = localStorage.getItem('cart');
    this.items = JSON.parse(this.cart);
    return this.items;
  }

  getTotalPrice() {
    this.totalPrice = 0;
    this.cart = localStorage.getItem('cart');
    this.items = JSON.parse(this.cart);
    this.items.forEach((item) => {
      this.totalPrice += +item.price;
    });

    return this.totalPrice;
  }

  deleteFromCart(id: number) {
    this.keepGoing = true;
    this.cart = localStorage.getItem('cart');
    this.items = JSON.parse(this.cart);

    this.items.forEach((item, index) => {
      if(this.keepGoing) {
        if (item.id == id) {
          this.items.splice(index, 1);
          this.keepGoing = false;
         }
      }
      
    });
    localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.getTotalPrice();
    return this.items;

    
  }

  clearCart() {
    localStorage.removeItem('cart');
    this.items = [];
    return this.items;
  }
}
