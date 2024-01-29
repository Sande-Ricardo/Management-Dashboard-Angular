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

  expand:boolean=false;
  display:string[]=["displayNone","","displayNone","displayNone"];

  changeExpand(){
    this.expand = !this.expand 
  };
  changeCard(n:number){
    for(let i = 0; i<4; i++){
      this.display[i] = "displayNone";
    };
    this.display[n] = ""
  }
  

}
