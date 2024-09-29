import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css']
})
export class TopPanelComponent implements OnInit {

  constructor(
    // private localStorageSv:LocalStorageService
    private loginSv:LoginService
  ) { }

  ngOnInit(): void {
  }


  logout(){
    this.loginSv.logout();
    location.reload()
  };
}
