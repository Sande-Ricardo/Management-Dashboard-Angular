import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginSv:LoginService ) { }

  ngOnInit(): void {
  }




  conditional1:boolean = true;
  signU_I:string = "Don't have an account yet?";

  usrn1:any = "";
  gml1:any = "";
  ctr1:any = "";
  


  
  signUpIn(){
    this.conditional1 = !this.conditional1;
    // window.location.reload();
  };
  
  
  // login(form:NgForm){
  //   const email=form.value.email;
  //   const password=form.value.password;
  //   this.loginSv.login(email,password);
  // };
  
  register(form:NgForm){
    this.conditional1 = !this.conditional1;
    const email=form.value.email;
    const password=form.value.password;
    const username=form.value.username;
    console.log("Registrado con email '" + email + "' existosamente.");
    this.loginSv.register(email, password, username);
  };


}
