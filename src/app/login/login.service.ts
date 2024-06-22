import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient){}
  user={
    email:"",
    password:"",
    username:""
  }

  // seguramente estos campos salgan de la DDBB
  name:string = "";
  lastName:string = "";


  register(email:string, pass:string, usrn:string){
    this.user.email=email;
    this.user.password=pass;
    this.user.username=usrn;
    this.http.post('http://localhost:8080/user/set', this.user)
  }
  


}
