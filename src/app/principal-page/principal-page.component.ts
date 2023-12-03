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
  display1:string="";
  display2:string="";
  display3:string="";
  display4:string="";

  changeExpand(){
    this.expand = !this.expand 
  }

}
