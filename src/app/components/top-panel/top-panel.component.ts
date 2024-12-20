import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css'],
  animations:[
    trigger('slide', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: .2 }),
        animate('200ms ease', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease', style({ transform: 'translateY(-100%)', opacity: .2 }))
      ])
    ])
  ]
})
export class TopPanelComponent implements OnInit {

  constructor(
    // private localStorageSv:LocalStorageService
    private loginSv:LoginService
  ) { }

  ngOnInit(): void {
  }
  
// ----------------------------------------  Variables  --------------------------------------------
  menu:boolean= false;
  statusPage:string = "BETA"

// -----------------------------------------  Methods  ---------------------------------------------
  logout(){
    this.loginSv.logout()
      .then(()=>{
        // // location.reload()
      })
      .catch(error => {
        console.error(error);
      });
    // setTimeout(() => {
    //   location.reload()
    // },1000)
  };

  changeTopMenu(){
    this.menu = !this.menu;
  }

}
