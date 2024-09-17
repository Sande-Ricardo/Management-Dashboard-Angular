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
// --------------------------------------- Variables -----------------------------------------------

  headlineIndx:number=0;

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
  set setUser(user:User){
    localStorage.setItem("user",JSON.stringify(user))
  }

  get getLogin (){
    return JSON.parse(localStorage.getItem("login") as string)
  }
  set setLogin(login:boolean){
    localStorage.setItem("login",JSON.stringify(login))
  }



  addHeadline(){
    let user:User = this.getUser;
    user.headlines.push(new Headline("New Headline", undefined, [new Task("New Task", new Extension("New Extension", undefined, "New Task"))]));
    this.setUser = user;
    console.log("New headline");
  }
  delHeadline(i:number){
    let user:User = this.getUser;
    user.headlines.splice(i, 1);
    this.setUser = user;
    // this.setUser = this.getUser.headlines.splice(i,1);
  }

  addTask(){
    let user:User = this.getUser;
    user.headlines[this.headlineIndx].tasks.push(new Task("New Task", new Extension("New Extension", undefined, "New Task")));
    this.setUser = user;
    console.log("new Task - Extension");
  }
  delTask(i:number){
    let user:User = this.getUser;
    user.headlines[this.headlineIndx].tasks.splice(i, 1);
    this.setUser = user;
    // this.setUser = this.getUser.headlines[this.headlineIndx].tasks.splice(i,1);
  }

// setUser() {
//   this.user$.subscribe(data => localStorage.setItem("user", JSON.stringify(data)))

// }
// setLogin() {
//   this.login$.subscribe(data => localStorage.setItem("login", JSON.stringify(data)))
// }

  set setHeadlineI(i:number){
    this.headlineIndx = i
  }

// -------------------------------------- Standard ----------------------------------------------
  userEx:User = new User("ric", "1@gmail.com", "qwerty", 0, "Ricardo", "Sande", [
    new Headline("N1 nada todavía", 0, [
      new Task("Task 0", new Extension ("Contenido de Extension 0 ", 0, "Extension 0"), 0),
      new Task("Task 1")
    ]),
    new Headline("N2 nada todavía")
])
}
