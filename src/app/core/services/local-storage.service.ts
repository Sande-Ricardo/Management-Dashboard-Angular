import { Injectable } from '@angular/core';
import { Extension } from 'src/app/model/Extension';
import { Headline } from 'src/app/model/Headline';
import { Task } from 'src/app/model/Task';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    // loginSv:LoginService
  ) {
    // this.user$ = loginSv.observableUser;
    // this.setUser();
    // this.login$ = loginSv.observableLogin;
    // this.setLogin();

    // loginSv.observableUser.subscribe(data => {
    //   if (data != loginSv.userEx){
    //     this.setUser = data
    //   }
    // });
    // loginSv.observableLogin.subscribe(data => {
    //   if (data != false){
    //     this.setLogin = data
    //   }
    // })
  }

// -------------------------------------- Observables ----------------------------------------------
// private observableLoginPrivate:BehaviorSubject<boolean> =
//     new BehaviorSubject<boolean>(this.getLogin);

//   get observableLogin(){return this.observableLoginPrivate.asObservable()};

//   set observableLoginBool(bool:boolean){this.observableLoginPrivate.next(bool)};

//   private observableUserPrivate:BehaviorSubject<User> =
//     new BehaviorSubject<User>(this.getUser);

//   get observableUser(){return this.observableUserPrivate.asObservable()};

//   set observableUserData(user:User){this.observableUserPrivate.next(user)};


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

// -------------------------------------- Standard ----------------------------------------------
  userEx:User = new User("ric", "1@gmail.com", "qwerty", 0, "Ricardo", "Sande", [
    new Headline("N1 nada todavía", 0, [
      new Task("Task 0", new Extension ("Contenido de Extension 0 ", 0, "Extension 0"), 0),
      new Task("Task 1")
    ]),
    new Headline("N2 nada todavía")
])
}
