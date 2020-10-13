import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  model: any = {};
  userName: string = "";
  password: string = "";
  response:any;
  selectedDB : string = "";
  returnUrl: string;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { 
 
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  get f() { return this.loginForm.controls; }
  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.userName = this.loginForm.get('username').value;
    this.password = this.loginForm.get('password').value;
    console.log("inside login method");
    if(this.userName === this.password){
      this.router.navigate(['/homepage']);
    } else {
      alert('User name and password should be same');
    }
  }

  registerUser(){
    this.router.navigate(['/register']);
  }

}
