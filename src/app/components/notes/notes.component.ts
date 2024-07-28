import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Extension } from 'src/app/model/Extension';
import { Headline } from 'src/app/model/Headline';
import { Task } from 'src/app/model/Task';
import { User } from 'src/app/model/User';
import { DataServiceService } from 'src/app/principal-page/data-service.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor( public dataSv:DataServiceService, private localStorageSv:LocalStorageService) { }

  ngOnInit(): void {
  }

  indx:number=0;
  notes:any={
    tittle:["1"],
    content:["Primer contenido"],

    constructor(tittle:string, content:string){
      this.tittle.push(tittle);
      this.content.push(content);
    }
  };
  
  // dark:string=""
  
  changeNote(i:number){
    this.indx=i
  };

  add(){
    this.dataSv.addNote();
    this.indx = (this.notes.tittle.length-1);
    // this.notes.constructor("Tittle","");
    // console.log(this.indx)
  };
  pop(i:number){
    this.dataSv.delNote(i)
    // this.notes.tittle.splice(i,1)
    // this.notes.content.splice(i,1)

  }


    // ----------------------------  Mock  ----------------------------------------

    mock:User = new User("ric", "1@gmail.com", "qwerty", 0, "Ricardo", "Sande", [
      new Headline("N1 nada todavía", 0, [
        new Task("Task 0", 0, new Extension ("Contenido de Extension 0 ", 0, "Task 0")),
        new Task("Task 1", 1, new Extension ("Contenido de Extension 1 ", 1, "Task 1")),
        new Task("Task 2", 2, new Extension ("Contenido de Extension 2 ", 2, "Task 2")),
        new Task("Task 3", 3, new Extension ("Contenido de Extension 3 ", 3, "Task 3")),
        new Task("Task 4", 4, new Extension ("Contenido de Extension 4 ", 4, "Task 4")),
        new Task("t1",40, new Extension ("text extension", 40, "t1"))

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
