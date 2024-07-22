import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginService } from '../core/services/login.service';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginSv:LoginService ) {
    this.login$ = loginSv.observableLogin;
    this.user$ = loginSv.observableUser
  }

  ngOnInit(): void {
  }



  conditional1:boolean = true;
  signU_I:string = "Don't have an account yet?";

  // ------------------------- Observables ---------------------------------  usarlos para obtener la información de usuario y para identificar el estado de login (respectiamente)
  user$:Observable<User>;
  login$:Observable<boolean>
  // -----------------------------------------------------------------------


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
  
  

}
