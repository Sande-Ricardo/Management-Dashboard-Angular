import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Extension } from 'src/app/model/Extension';
import { Headline } from 'src/app/model/Headline';
import { Task } from 'src/app/model/Task';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( 
    private http:HttpClient,
    private router:Router
  ){
    // console.log("este", this.userEx);
    this.user$ = this.observableUser;
  }


  
  userEx1:User = {
    id:0,
    name:"",
    last_name:"",
    username:"",
    email:"",
    password:"",
    headlines:[]
  };

  userEx:User = new User("ric", "1@gmail.com", "qwerty", 0, "Ricardo", "Sande", [
    new Headline("N1 nada todavía", 0, [
      new Task("Task 0", 0, new Extension ("Contenido de Extension 0 ", 0, "Extension 0")),
      new Task("Task 1")
    ]),
    new Headline("N2 nada todavía")
  ])
  // user!: User;
  user$:Observable<User>;
  // seguramente estos campos salgan de la DDBB
  // name:string = "";
  // lastName:string = "";


  // --------------------------------- Url -------------------------------------
  private urlUser = 'http://localhost:8080/user'



  // ----------------------- Observable LoginStatus ---------------------------
  private observableLoginPrivate:BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  get observableLogin(){return this.observableLoginPrivate.asObservable()};

  set observableLoginBool(bool:boolean){this.observableLoginPrivate.next(bool)};

  // ------------------------- Observable User ---------------------------------
  private observableUserPrivate:BehaviorSubject<User> =
    new BehaviorSubject<User>(this.userEx);
  
  get observableUser(){return this.observableUserPrivate.asObservable()};

  set observableUserData(user:User){this.observableUserPrivate.next(user)};
  // ---------------------------------------------------------------------------


  // ------------------------------ redirect -----------------------------------
  redirect(){
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

        // de momento de prueba
        this.userEx = data as User;

        // this.redirect();
        console.log("posterior: ", this.observableUser.subscribe(data => {return data}))
      }
    })
  }
  

}
