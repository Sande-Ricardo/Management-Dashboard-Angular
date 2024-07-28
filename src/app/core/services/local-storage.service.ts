import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(loginSv:LoginService ) {

    // this.user$ = loginSv.observableUser;
    // this.setUser();
    // this.login$ = loginSv.observableLogin;
    // this.setLogin();

    loginSv.observableUser.subscribe(data => {
      if (data != loginSv.userEx){
        this.setUser = data
      }
    });
    loginSv.observableLogin.subscribe(data => {
      if (data != false){
        this.setLogin = data
      }
    })

  }

// -------------------------------------- Variables ----------------------------------------------
// user$:Observable<User>;
// login$:Observable<boolean>;
// no se usan



// -------------------------------------- Methods ----------------------------------------------
  get getUser (){
    return JSON.parse(localStorage.getItem("user") as string)
  }
  get getLogin (){
    return JSON.parse(localStorage.getItem("login") as string)
  }

  set setUser(user:User){
    localStorage.setItem("user",JSON.stringify(user))
  }
  set setLogin(login:boolean){
    localStorage.setItem("login",JSON.stringify(login))
  }

// setUser() {
//   this.user$.subscribe(data => localStorage.setItem("user", JSON.stringify(data)))

// }
// setLogin() {
//   this.login$.subscribe(data => localStorage.setItem("login", JSON.stringify(data)))
// }
}
