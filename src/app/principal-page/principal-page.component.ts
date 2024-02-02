import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayN:string="display1"
  expand:boolean=false;
  display:string[]=["","","",""];
  displayM:string[]=["","displayNoneM","displayNoneM","displayNoneM"];



  changeExpand(){
    this.expand = !this.expand
  };
  
  changeDisplay(n:number){
    this.displayN = "display"+n;
    console.log(this.displayN)
  }

  changeCard(n:number){
    this.display = ["displayNone","displayNone","displayNone","displayNone"]
    this.display[n] = "";
  };
  changeCardM(n:number){
    this.display = ["displayNoneM","displayNoneM","displayNoneM","displayNoneM"]
    this.displayM[n] = ""
};
  

}
