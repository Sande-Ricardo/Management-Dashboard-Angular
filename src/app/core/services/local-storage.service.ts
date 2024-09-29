import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(
    // private sharingSv:SharingService
  ) {
    // this.sharingSv.userObservableData = this.getUser;

    // this.user$.subscribe(data => {this.setUser = data; console.log(data, "data");
    // });
  }

  
// --------------------------------------- Variables -----------------------------------------------
  headlineIndx:number=0;

// -------------------------------------- Observables ----------------------------------------------
  // user$ = this.sharingSv.userObservable

// -------------------------------------- Methods ----------------------------------------------
  get getUser (){
    return JSON.parse(localStorage.getItem("user") as string)
  }
  set setUser(user:User | string){
    localStorage.setItem("user",JSON.stringify(user))
  }

  get getLogin (){
    return JSON.parse(localStorage.getItem("login") as string)
  }
  set setLogin(login:boolean){
    localStorage.setItem("login",JSON.stringify(login))
  }


  // updateUser(){
  //   // this.user$.subscribe(data=>{
  //   //   this.setUser = data
  //   // })
  // }

  logout(){
    this.setUser = "";
    this.setLogin = false;
    console.log("Logout");
  }
}