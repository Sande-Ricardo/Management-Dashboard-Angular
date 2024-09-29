import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharingService } from 'src/app/core/services/sharing.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css']
})
export class LateralMenuComponent implements OnInit {

  constructor(
    public sharingSv:SharingService
  ) {


    // this.user$.subscribe(data =>{
    //   this.prueba = data
    // })
  }

  ngOnInit(): void {
  }

// -------------------------------------- Observables ----------------------------------------------
  user$:Observable<User> = this.sharingSv.userObservable;

// --------------------------------------- Variables -----------------------------------------------
  // headlines!:Headline[]

  active1:string= "";
  active2:string= "";



  // no sirve
  // prueba!:User;
// ---------------------------------------- Methods ------------------------------------------------

  activate(){
    if      (this.active1==""){this.active1="deploy"; this.active2="dpl"}
    else                      {this.active1=""; this.active2=""}
  }

  setHeadlineI(i:number){
    this.sharingSv.changeHeadI(i);
  }

  addHeadline(){
    this.sharingSv.addHeadline();
  }

  showHeadlines(){
    try {
      this.user$.subscribe(data=>{
        console.log(data);
        
      })
      
    } catch (e) {
      console.log(e);
      
    }
  }



}
