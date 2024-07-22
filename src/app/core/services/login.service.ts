import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( 
    private http:HttpClient,
    private router:Router
  ){  }


  
  user!: User;
  // seguramente estos campos salgan de la DDBB
  name:string = "";
  lastName:string = "";

  private urlUser = 'http://localhost:8080/user'



  // --------------------------- Observable Login ------------------------------
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


  // ------------------------------ redirect -----------------------------------
  redirect (){
    if(this.observableLogin){
      this.router.navigate(['/home']);
    }
  }

  // ---------------------------------------------------------------------------

  

  register(usr:User){
    this.http.post(this.urlUser + '/set', usr).subscribe(
      (data) => {return data}
    );
    // console.log(this.urlUser + '/set', usr)
  }

  login(email:string, password:string){

    
    
    this.http.get(this.urlUser + '/login/' + email + '/' + password).subscribe(data => {
      if(data == null){
        console.error("error!");
      } else {
        console.log(data);
        this.observableUserData = data as User;
        this.observableLoginBool = true as boolean;

        this.redirect();
        // console.log("posterior: " + this.observableUser)
      }
    })
  }
  

}
