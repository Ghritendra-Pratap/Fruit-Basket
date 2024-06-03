import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private registerService:RegisterService, 
    private router:Router
  ){}

  registerForm: FormGroup = new FormGroup({
    fullname: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    cpassword: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required])
  })

  admin:boolean=false;
  onSubmit(){
    if(this.registerForm.valid){
      this.admin
      ?this.registerService.onAdminRegister(this.registerForm.value)
      :this.registerService.onRegister(this.registerForm.value)
  }

  }
  onAdmin(){
    this.admin = !this.admin
  }

  navToLogin(){
    this.router.navigateByUrl("login")
  }


}
