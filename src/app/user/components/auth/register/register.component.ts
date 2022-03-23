import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  authenticationRegisterForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;

  initFormControl() {
    this.firstName = new FormControl('');
    this.lastName = new FormControl('');
    this.email = new FormControl('');
    this.password = new FormControl('');
  }

  createForm() {
    this.authenticationRegisterForm = new FormGroup({
      firstName: this.firstName, 
      lastName: this.lastName, 
      email: this.email, 
      password: this.password, 
    });
  }

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
    this.initFormControl();
    this.createForm();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const observer = {
      next: (res: any) => {
        localStorage.setItem('userToken', res.token);
        this.router.navigate(['']);
        
      },
      error: (err: Error) => console.log(err.message),  
    };

    this.authenticationService
      .userRegister(this.authenticationRegisterForm.value)
      .subscribe(observer);
  }

}
