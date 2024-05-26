import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor( private http : HttpClient , private router : Router) {}

  userAddress: string[]=[];
  userId : string="";
  login(user:any){
    return this.http.post("api/auth/login", user).subscribe(res=>{
      if(res){
        localStorage.setItem('authToken',(res as any).token );
        this.userId = (res as any).id
        this.userAddress= (res as any).address
        if((res as any).isAdmin)
          this.router.navigateByUrl("layout")
        else
          this.router.navigateByUrl("home")
      }
})
  }

  getUserId(){
    return this.userId
  }

  getUserAddress(){
    return this.userAddress
  }

  

  




}
