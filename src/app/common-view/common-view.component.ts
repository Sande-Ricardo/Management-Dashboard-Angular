import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../core/services/local-storage.service';
import { User } from '../model/User';

@Component({
  selector: 'app-common-view',
  templateUrl: './common-view.component.html',
  styleUrls: ['./common-view.component.css']
})
export class CommonViewComponent implements OnInit {

  constructor(
    private localStorageSv:LocalStorageService
  ) {
    console.log("Defining User");
    this.user=this.localStorageSv.getUser
  }

  ngOnInit(): void {
  }

  user!:User;

}
