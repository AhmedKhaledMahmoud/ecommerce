import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  userInfo: any;

  orderForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  phone: FormControl;
  address: FormControl;
  city: FormControl;
  postcode: FormControl;
  note: FormControl;
  userId: FormControl;
  orderPrice: FormControl;

  initFormControl() {
    this.firstName = new FormControl('');
    this.lastName = new FormControl('');
    this.email = new FormControl('');
    this.phone = new FormControl('');
    this.address = new FormControl('');
    this.city = new FormControl('');
    this.postcode = new FormControl('');
    this.note = new FormControl('');
    this.userId = new FormControl('');
    this.orderPrice = new FormControl('');
  }

  createForm() {
    this.orderForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      address: this.address,
      city: this.city,
      postcode: this.postcode,
      note: this.note,
      userId: this.userId,
      orderPrice: this.orderPrice,
    });
  }

  constructor(private cartService: CartService,private router:Router, private orderService:OrderService) {}

  ngOnInit(): void {
    this.userInfo = localStorage.getItem('userInfo');
    this.userInfo = JSON.parse(this.userInfo);
    this.initFormControl();
    this.createForm();
  }

  items = this.cartService.getItems();

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  onSubmit() {
    console.log("Done");
    
    const observer = {
      next: (res:object)=>{
        console.log(res);
        
           alert("Order Successfult");
           this.cartService.clearCart();
           this.router.navigate(['']);
       },
       error: (err:Error)=>console.log(err.message)
    }

    this.orderForm.value.products = this.items;
    this.orderForm.value.totalPrice = this.getTotalPrice();
    this.orderForm.value.userId = "2274";
     this.orderService.addOrder(this.orderForm.value).subscribe(observer);
     
  }
}
