import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../core/services/local-storage.service';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css'],
})
export class PrincipalPageComponent implements OnInit {
  // Para la versión 0.0.17 se deja de utilizar observables luego del local storage

  constructor(
    // private loginSv:LoginService,
    private router: Router,
    private localStorageSv: LocalStorageService
  ) {
    // this.user$ = loginSv.observableUser;
    // this.user$.subscribe(data =>{

    // para definir las headlines
    // this.headlines = data.headlines;
    // para definir las tasks (REVISAR) (queda feo)
    // this.tasks = this.headlines[0].tasks as unknown as Task[];
    // this.taskTittles = this.tasks.forEach((tittle) => tittle.content) as unknown as string[]
    // } );

    // this.user=localStorageSv.getUser
    // this.headlines=this.user.headlines
    if (!this.localStorageSv.getLogin) {
      this.redirect(this.urlLogin);
    }
  }

  ngOnInit(): void { }

  // user$:Observable<User>

// --------------------------------------------- Url -----------------------------------------------
  private urlLogin = '/login';

// ------------------------------------------ Variables --------------------------------------------
  displayN: string = 'display1';
  expand: boolean = false;
  display: string[] = ['', '', '', ''];
  displayM: string[] = ['', 'displayNoneM', 'displayNoneM', 'displayNoneM'];

  enableEdit:boolean = false;
  // user!:User;
  // headlines!:Headline[];
  // tasks!:Task[];
  // taskTittles!:string[];
// -----------------------------------------  Methods  ---------------------------------------------

  changeExpand() {
    this.expand = !this.expand;
  }

  changeDisplay(n: number) {
    if (n == 1) {
      this.display = ['', '', '', ''];
      this.displayM = ['', 'displayNoneM', 'displayNoneM', 'displayNoneM'];
      this.editing(false)
    } else if (n == 3) {
      this.editing(true)
    }
    this.displayN = 'display' + n;
    console.log(this.displayN);
  }

  changeCard(n: number) {
    this.display = ['displayNone', 'displayNone', 'displayNone', 'displayNone'];
    this.display[n] = '';
  }
  changeCardM(n: number) {
    this.display = [
      'displayNoneM',
      'displayNoneM',
      'displayNoneM',
      'displayNoneM',
    ];
    this.displayM[n] = '';
  }

  editing (bool:boolean){
    this.enableEdit = bool;
  }

  redirect(path: string) {
    this.router.navigate([path]);
  }
}
