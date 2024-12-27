import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  constructor() {
    // localStorage.setItem((this.key),"")
  }

  key:string = "JWT"

  get jwt ():string{
    return localStorage.getItem(this.key) as string
  };

  set jwt(token:string){    
    localStorage.setItem(this.key,token)
  };

  delJwt(){
    localStorage.setItem(this.key,"")
  };

}
