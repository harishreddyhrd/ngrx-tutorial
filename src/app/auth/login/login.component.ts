import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  showErrorsForEmailInput() {
    const emailPlaceHolder = this.loginForm.get('email');
    if (emailPlaceHolder?.touched && !emailPlaceHolder.valid) {
      if (emailPlaceHolder.errors.required) {
        return 'Email is required';
      } else if (emailPlaceHolder.errors.email) {
        return 'Invalid email pattern';
      }
    }
  }

  showErrorsForPasswordInput() {
    const passwordPlaceholder = this.loginForm.get('password');
    if (passwordPlaceholder?.touched && !passwordPlaceholder.valid) {
      if (passwordPlaceholder.errors.required) {
        return 'Password is required';
      } else if (passwordPlaceholder.errors.minlength) {
        return 'Password should have atleast 8 characters';
      }
    }
  }

  onLogin() {
    console.log(this.loginForm.value);
  }
}
