import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JwtService } from './services/jwt.service';
import { LoginService } from './services/login.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    LoginService,
    JwtService
  ]
})
export class CoreModule { }
