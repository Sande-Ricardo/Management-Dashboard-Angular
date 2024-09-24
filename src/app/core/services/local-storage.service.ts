import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';
import { SharingService } from './sharing.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(
    private sharingSv:SharingService
  ) {
    this.sharingSv.userObservableData = this.getUser;

    this.user$.subscribe(data => {this.setUser = data; console.log(data);
    });
  }
// --------------------------------------- Variables -----------------------------------------------
  headlineIndx:number=0;

// -------------------------------------- Observables ----------------------------------------------
  user$ = this.sharingSv.userObservable

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



  // addHeadline(){
  //   let user:User = this.getUser;
  //   user.headlines.push(new Headline("New Headline", [new Task("New Task", "New Content")]));
  //   this.setUser = user;
  //   console.log("New headline");
  //   console.log(user)
  // }
  // delHeadline(i:number){
  //   let user:User = this.getUser;
  //   user.headlines.splice(i, 1);
  //   this.setUser = user;
  //   // this.setUser = this.getUser.headlines.splice(i,1);
  // }

  // addTask(){
  //   let user:User = this.getUser;
  //   user.headlines[this.headlineIndx].tasks.push(new Task("New Task", "New Content"));
  //   this.setUser = user;
  //   console.log("new Task - Extension");
  //   console.log(user)
    
  // }
  // delTask(i:number){
  //   let user:User = this.getUser;
  //   user.headlines[this.headlineIndx].tasks.splice(i, 1);
  //   this.setUser = user;
  //   // this.setUser = this.getUser.headlines[this.headlineIndx].tasks.splice(i,1);
  // }

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
  // userEx:User = new User("ric", "1@gmail.com", "qwerty", "Ricardo", "Sande", [
  //   new Headline("N1 nada todavía", [
  //     new Task("Task 0", "Content 0"),
  //     new Task("Task 1", "Content 1")
  //   ], 0),
  //   new Headline("N2 nada todavía")
  // ], 0)
}
