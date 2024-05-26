import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private loginService : LoginService, private router: Router){}
  


  loginForm: FormGroup= new FormGroup({
      email: new FormControl('',[Validators.required , Validators.email]),
      password: new FormControl('',[Validators.required])
    }) 
  
  
onSubmit(){
    this.loginService.login(this.loginForm.value)
}


navToRegister(){
  this.router.navigateByUrl("register")
}
}
