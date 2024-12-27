import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Flashcard } from 'src/app/model/Flashcard';
import { Headline } from 'src/app/model/Headline';
import { Task } from 'src/app/model/Task';
import { User } from 'src/app/model/User';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  constructor(
    private localStorageSv:LocalStorageService
  ) {
    this.userObservableData = localStorageSv.getUser
  }


  mock:User = new User("Username", "Email", "Password")


// -------------------------------------- Observables ----------------------------------------------
  private userObservablePrivate:BehaviorSubject<User> =
    new BehaviorSubject<User>(this.mock);

  get userObservable(){
    return this.userObservablePrivate.asObservable()
  };

  set userObservableData(user:User){
    this.userObservablePrivate.next(user)
  };
  
  
// ---------------------------------------  Variables  ---------------------------------------------
  headlineIndex:number = 0;

// ----------------------------------------  Methods  ----------------------------------------------
  updateUser(user?:User){
    if(user){
      this.localStorageSv.setUser = user
    } else {
      this.userObservable.subscribe(data=>{
        this.localStorageSv.setUser = data;
      })
    }
    // console.log("user updated");
  };

  changeHeadI(i:number){
    this.headlineIndex = i
  }

  addHeadline(){
    this.userObservable.subscribe(data=>{
      data.headlines.push(
        new Headline("New Headline",[new Task("New Task", "New content")])
      )
    });
    this.updateUser();
  }
  delHeadline(i:number){
    this.userObservable.subscribe(data=>{
      data.headlines.splice(i,1)
    });
    this.updateUser();
  }

  addTask(){
    this.userObservable.subscribe(data=>{
      data.headlines[this.headlineIndex].tasks.push(new Task("New Task", "New content"))
    });
    this.updateUser();
  }
  delTask(i:number){
    this.userObservable.subscribe(data=>{
      data.headlines[this.headlineIndex].tasks.splice(i,1)
    });
    this.updateUser();
  }

  addFlashcard(i:number){
    this.userObservable.subscribe(data=>{
      data.flashCards.splice(
        i,0, new Flashcard("Title","Content")
      )
    });
    this.updateUser();
  }
  delFlashcard(i:number){
    this.userObservable.subscribe(data=>{
      data.flashCards.splice(i,1)
    });
    this.updateUser();
  }

// -------------------------------------------------------------------------------------------------
  
  
  

}
