import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css']
})
export class TopPanelComponent implements OnInit {

  constructor(
    private localSorageSv:LocalStorageService
  ) { }

  ngOnInit(): void {
  }


  logout(){
    this.localSorageSv.setLogin = false;
    this.localSorageSv.setUser = this.localSorageSv.userEx;
    window.location.reload();
  };
}
