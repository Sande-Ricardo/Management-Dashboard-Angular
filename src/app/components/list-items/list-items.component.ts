import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Extension } from 'src/app/model/Extension';
import { Headline } from 'src/app/model/Headline';
import { Task } from 'src/app/model/Task';
import { User } from 'src/app/model/User';
import { DataServiceService } from 'src/app/principal-page/data-service.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  // @Input() task!:string[];
  @Input() headlines!:Headline[];

  constructor( public dataSv:DataServiceService,  private localStorageSv:LocalStorageService) {
    
    // localStorageSv.user.subscribe((data:User) => {
    //   this.user$ = data;
    //   this.headlines$ = data.headlines
    // });
    // localStorageSv.login.subscribe((data:boolean) => this.login$ = data )
    
    this.user = localStorageSv.getUser
    console.log(localStorageSv.getUser)
  }

  ngOnInit(): void {
  }

  // ----------------------------- Observables --------------------------------- ¡¡¡lo que llegan no son obsrvables!!!
  user:User;
  headlines$:Headline[] | undefined
  login$:boolean | undefined;
  // ---------------------------------------------------------------------------


  addItem(){
    this.dataSv.addItem();
  }

  test1(){
    console.log(this.localStorageSv.getUser)
  }

  // items:string[] = []


  // ----------------------------  Mock  ----------------------------------------

  mock:User = new User("ric", "1@gmail.com", "qwerty", 0, "Ricardo", "Sande", [
    new Headline("N1 nada todavía", 0, [
      new Task("Task 0", 0, new Extension ("Contenido de Extension 0 ", 0, "Extension 0")),
      new Task("Task 1", 1, new Extension ("Contenido de Extension 1 ", 1, "Extension 1")),
      new Task("Task 2", 2, new Extension ("Contenido de Extension 2 ", 2, "Extension 2")),
      new Task("Task 3", 3, new Extension ("Contenido de Extension 3 ", 3, "Extension 3")),
      new Task("Task 4", 4, new Extension ("Contenido de Extension 4 ", 4, "Extension 4"))
    ]),
    new Headline("N2 nada todavía", 1, [
      new Task("Task 0", 5, new Extension ("Contenido de Extension 0 ", 5, "Extension 0")),
      new Task("Task 1", 6, new Extension ("Contenido de Extension 1 ", 6, "Extension 1"))
    ]),
    new Headline("N3 nada todavía", 2, [
      new Task("Task 0", 7, new Extension ("Contenido de Extension 0 ", 7, "Extension 0")),
      new Task("Task 1", 8, new Extension ("Contenido de Extension 1 ", 8, "Extension 1"))
    ])
  ])
  // ---------------------------------------------------------------------------
}
