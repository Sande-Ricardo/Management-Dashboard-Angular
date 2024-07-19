import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient ){}


  user!: User;
  // seguramente estos campos salgan de la DDBB
  name:string = "";
  lastName:string = "";

  private urlUser = 'http://localhost:8080/user'



  // --------------------------- Observable Login-------------------------------
  private observableLoginPrivate:BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  get observableLogin(){return this.observableLoginPrivate.asObservable()};

  set observableLoginBool(bool:boolean){this.observableLoginPrivate.next(bool)};

  // ------------------------- Observable User ---------------------------------
  private observableUserPrivate:BehaviorSubject<User> =
    new BehaviorSubject<User>(this.user);
  
  get observableUser(){return this.observableUserPrivate.asObservable()};

  set observableUserData(user:User){this.observableUserPrivate.next(user)};
  // ---------------------------------------------------------------------------



  register(usr:User){
    this.http.post(this.urlUser + '/set', usr).subscribe(
      (data) => {return data}
    );
    // console.log(this.urlUser + '/set', usr)
  }

  login(email:string, password:string){
    this.http.get(this.urlUser + '/email/' + email).subscribe(data => {
      console.log(data);
    })
  }
  

}
