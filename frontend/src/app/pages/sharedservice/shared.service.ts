import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService{

  headers = new HttpHeaders({
    Authorization: `${localStorage.getItem("authToken")}`,
  });

  constructor( private http : HttpClient) { }

  getallCategories(){
      return this.http.get("http://localhost:5000/api/category" , {headers : this.headers})
  }

}
