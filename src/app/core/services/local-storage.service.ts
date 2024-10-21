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

// ChatBot
  get getChatbotQuestions(){
    return JSON.parse(localStorage.getItem("chatbotQuestions")  || '[]')
  }
  set setChatbotQuestions(chatbotQuestions:string[]){
    localStorage.setItem("chatbotQuestions",JSON.stringify(chatbotQuestions))
  }

  get getChatbotAnswers(){
    return JSON.parse(localStorage.getItem("chatbotAnswers")  || '[]')
  }
  set setChatbotAnswers(chatbotAnswers:string[]){
    localStorage.setItem("chatbotAnswers",JSON.stringify(chatbotAnswers))
  }



  // updateUser(){
  //   // this.user$.subscribe(data=>{
  //   //   this.setUser = data
  //   // })
  // }

  logout(){
    this.cleanLocalStorage();
    console.log("Logout");
  }

  cleanLocalStorage(){
    this.setUser = "";
    this.setLogin = false;
    this.setChatbotAnswers = [];
    this.setChatbotQuestions = [];
  }
}