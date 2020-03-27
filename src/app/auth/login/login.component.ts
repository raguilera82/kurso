import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonValidator } from 'src/app/common-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',
      [Validators.required, CommonValidator.startWithNumber],
      [CommonValidator.userTaken]
      ),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;

    console.log('username', username);
    console.log('password', password);
  }

}
