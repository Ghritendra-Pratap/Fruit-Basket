import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http : HttpClient) { }

  onRegister(userDetail: any){
    this.http.post("api/auth/signup" , userDetail).subscribe(res=>{
      console.log(res)
    })
  }
  onAdminRegister(userDetail: any){
    this.http.post("api/auth/signup-admin" , userDetail).subscribe(res=>{
      console.log(res)
    })
  }
}
