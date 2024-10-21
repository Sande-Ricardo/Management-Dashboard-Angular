import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-emergency-cleaner',
  template: ''
})
export class EmergencyCleanerComponent implements OnInit {

  constructor(localStorageSv:LocalStorageService, router:Router) {
    localStorageSv.cleanLocalStorage();
    router.navigate([''])
  }

  ngOnInit(): void {
  }

}
