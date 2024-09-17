import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Headline } from 'src/app/model/Headline';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css']
})
export class LateralMenuComponent implements OnInit {

  // @Input() headlines!:Headline[];
  constructor(
    public localStorageSv:LocalStorageService
  ) {
    this.headlines = localStorageSv.getUser.headlines
  }

  ngOnInit(): void {
  }


  headlines!:Headline[]

  active1:string= "";
  active2:string= "";

  activate(){
    if      (this.active1==""){this.active1="deploy"; this.active2="dpl"}
    else                      {this.active1=""; this.active2=""}
  }

  setHeadlineI(i:number){
    this.localStorageSv.setHeadlineI = i;
  }

  showHeadlines(){
    try {
      // console.log(this.headlines[0].content);
      console.log(this.headlines);
      
    } catch (e) {
      console.log(e);
      
    }
  }



}
