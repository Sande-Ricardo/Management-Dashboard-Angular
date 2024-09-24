import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  constructor() {
    this.userObservable.subscribe(data =>{
      this.user = data;
      console.log("user is setted in SharingService");
    })
  }


  mock:User = new User("Username", "Email", "Password")


// -------------------------------------- Observables ----------------------------------------------
  private userObservablePrivate:BehaviorSubject<User> =
    new BehaviorSubject<User>(this.mock);

  get userObservable(){
    // this.userObservablePrivate.subscribe(data =>{console.log(data);})
    return this.userObservablePrivate.asObservable()
  };

  set userObservableData(user:User){
    console.log("userObservableData used");
    
    this.userObservablePrivate.next(user)
  };
  
  
// ---------------------------------------  Variables  ---------------------------------------------
  user?:User

// ----------------------------------------  Methods  ----------------------------------------------
  modUser(){
    console.log("user modded");
    
    this.userObservableData = this.user as User;
  }


// -------------------------------------------------------------------------------------------------
  
  
  

}
