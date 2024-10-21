import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { User } from 'src/app/model/User';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http:HttpClient,
    private router:Router,
    private localStorageSv:LocalStorageService,
  ){
    // this.user$ = this.observableUser;
    // console.log("UserData: ")
    // this.user$.subscribe(data => console.log(data))
    // console.log("LoginStatus: ")
    // this.observableLogin.subscribe(data => console.log(data))
    if(this.localStorageSv.getLogin){
      this.redirect();
    }
  }



  // ------------------------------ Variables ----------------------------------
  // userEx:User=this.localStorageSv.userEx;

  // user$:Observable<User>;
  
  // user!: User;
  // seguramente estos campos salgan de la DDBB
  // name:string = "";
  // lastName:string = "";

  
  // --------------------------------- Url -------------------------------------
  private urlUser = 'http://localhost:8080/user';
  private urlWorkspace = '';


// ------------------------ Observable LoginStatus -----------------------------
  private observableLoginPrivate:BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  get observableLogin(){return this.observableLoginPrivate.asObservable()};

  set observableLoginBool(bool:boolean){this.observableLoginPrivate.next(bool)};



// ------------------------------- redirect ------------------------------------
  redirect(){
    if(this.observableLogin){
      this.router.navigate([this.urlWorkspace]);
    }

    // this.router.navigate([this.urlWorkspace]);
  }
  
  
// ------------------------------- log in/up -----------------------------------
  register(usr:User){
    this.http.post(this.urlUser + '/set', usr).subscribe(
      (data) => {return data}
    )
  };

  login(email:string, password:string):boolean{
    this.http.get(this.urlUser + '/login/' + email + '/' + password)
      .pipe(
        catchError(this.errorHandler)
      ).subscribe({
        next: (data) => {
          this.localStorageSv.setUser = data as User;
          this.localStorageSv.setLogin = true;
          this.redirect();
          location.reload();
          // console.log(1);
          return false;
        },
        error:(error)=>{
          console.log(error)
          return true;
        }
      })
      return true;
    // alternativa
    // this.http.get(this.urlUser + '/login/' + email + '/' + password).subscribe(data => {
    //   if(data == null){
    //     console.log("error!");
    //   } else {
    //     this.localStorageSv.setUser = data as User;
    //     this.localStorageSv.setLogin = true;
    //     this.redirect();
    //     location.reload()
    //   }
    // })
  };
  
// --------------------------------  logout  -----------------------------------
  logout(){
    try{
      let user:User = this.localStorageSv.getUser;
      this.http.post(this.urlUser + '/update/' + user.idUser.toString(), user).subscribe(
        data=>{
          return data
        }
      )
    } catch (error) {
      console.error(error);
    }
    this.localStorageSv.logout();
  };


// ---------------------------------  Error  -----------------------------------
  errorHandler(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `The server returned the code ${error.status}, ` +
        `response body was: ${error.error}`
      );
    };
    // return throwError('Algo salió mal; por favor, intenta nuevamente más tarde.')
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }

}

