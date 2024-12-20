import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  constructor() {
    localStorage.setItem((this.key),"")
  }

  key:string = "JWT"

  get jwt ():string{
    console.log("get jwt");

    return localStorage.getItem(this.key) as string
  };

  set jwt(token:string){
    console.log("set jwt");
    
    localStorage.setItem(this.key,token)
  };

  delJwt(){
    console.log("del jwt");
    
    localStorage.setItem(this.key,"")
  };

}
