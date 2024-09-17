import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Extension } from 'src/app/model/Extension';
import { Headline } from 'src/app/model/Headline';
import { Task } from 'src/app/model/Task';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  // @Input() task!:string[];
  // @Input() headlines!:Headline[];

// ¡¡¡¡ ME CONVIENE UTILIZAR UN UNICO OBSERVABLE PARA LA INFORMACIÓN DEL USUARIO !!!! (creo que mando toda la info a el componente padre y enlazo todo con ngModel)

  constructor( 
    // public dataSv:DataServiceService,
    public localStorageSv:LocalStorageService
  ) {
    
    this.headlines = localStorageSv.getUser.headlines;

    // localStorageSv.user.subscribe((data:User) => {
    //   this.user$ = data;
    //   this.headlines$ = data.headlines
    // });
    // localStorageSv.login.subscribe((data:boolean) => this.login$ = data )
    
    // this.user = localStorageSv.getUser;
    // this.user$ = localStorageSv.observableUser;
    // console.log(localStorageSv.getUser)
  }

  ngOnInit(): void {
  }

  // ------------------------------ Variables ---------------------------------- 
  // user:User;
  headI:number= 1;
  taskI:number= 0;

  headlines!:Headline[];

  // ----------------------------- Observables --------------------------------- ¡¡¡lo que llegan no son obsrvables!!!
  // user$:Observable<User>;
  headlines$:Headline[] | undefined
  login$:boolean | undefined;

  
  // ------------------------------  Methods  ----------------------------------

  addItem(){
    this.localStorageSv.addTask();
    this.headlines = this.localStorageSv.getUser.headlines;
    console.log(this.localStorageSv.getUser);
  }

  // ---------------------------------------------------------------------------

  taskIndx(i:number){
    this.taskI = i;
  }


  test1(){
    // console.log(this.localStorageSv.getUser)
  }

  // items:string[] = []


  // ----------------------------  Mock  ----------------------------------------

  mock:User = new User("ric", "1@gmail.com", "qwerty", 0, "Ricardo", "Sande", [
    new Headline("N1 nada todavía", 0, [
      new Task("Task 0", new Extension ("Contenido de Extension 0 ", 0, "Extension 0"), 0),
      new Task("Task 1", new Extension ("Contenido de Extension 1 ", 1, "Extension 1"), 1),
      new Task("Task 2", new Extension ("Contenido de Extension 2 ", 2, "Extension 2"), 2),
      new Task("Task 3", new Extension ("Contenido de Extension 3 ", 3, "Extension 3"), 3),
      new Task("Task 4", new Extension ("Contenido de Extension 4 ", 4, "Extension 4"), 4)
    ]),
    new Headline("N2 nada todavía", 1, [
      new Task("Task 0", new Extension ("Contenido de Extension 0 ", 5, "Extension 0"), 5),
      new Task("Task 1", new Extension ("Contenido de Extension 1 ", 6, "Extension 1"), 6)
    ]),
    new Headline("N3 nada todavía", 2, [
      new Task("Task 0", new Extension ("Contenido de Extension 0 ", 7, "Extension 0"), 7),
      new Task("Task 1", new Extension ("Contenido de Extension 1 ", 8, "Extension 1"), 8)
    ])
  ])
  // ---------------------------------------------------------------------------
}
