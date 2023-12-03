import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css']
})
export class LateralMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  active1:string="";
  active2:string="";

  activate(){
    if      (this.active1==""){this.active1="deploy"; this.active2="dpl"}
    else                      {this.active1=""; this.active2=""}
  }
}
