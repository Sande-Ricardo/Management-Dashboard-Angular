import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../core/services/local-storage.service';
import { LoginService } from '../core/services/login.service';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginSv:LoginService,
    private localStorageSv:LocalStorageService
  ) {
    this.login$ = loginSv.observableLogin;
    this.user$ = loginSv.observableUser
  }

  ngOnInit(): void {

    // this.user$.subscribe(data => console.log(data))
    
  }



  conditional1:boolean = true;
  signU_I:string = "Don't have an account yet?";

  // ------------------------- Observables ---------------------------------  usarlos para obtener la información de usuario y para identificar el estado de login (respectiamente)
  user$:Observable<User>;
  login$:Observable<boolean>
  // -----------------------------------------------------------------------
  log:boolean = false;


  usrn1:any;
  eml1:any;
  ctr1:any;
  


  signUpIn(){
    // para cambiar el condicional de formato login/up
    this.conditional1 = !this.conditional1;
    // window.location.reload();
  };


  
  // Create
  
  register(form:NgForm){
    const user = new User(
      form.value.username,
      form.value.email,
      form.value.password,
    );
    this.loginSv.register(user);
    this.signUpIn()
  };
  
  
  // Read
    
    login(form:NgForm){
      const email=form.value.email;
      const password=form.value.password;
      this.loginSv.login(email,password);
    };

    

    loginStatus(){
      this.login$.subscribe(data => console.log(data));
      this.user$.subscribe(data => console.log(data));
      console.log(this.localStorageSv.getUser)
    }
  

}
