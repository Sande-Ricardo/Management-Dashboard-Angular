import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Headline } from 'src/app/model/Headline';
import { DataServiceService } from 'src/app/principal-page/data-service.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  // @Input() headlines!:Headline[];

  constructor(
    public dataSv:DataServiceService,
    public localStorageSv:LocalStorageService) { 
      this.headlines = localStorageSv.getUser.headlines
    }

  ngOnInit(): void {
    console.log(this.headlines);
    // console.log(this.headlines[2].tasks[0].content);
  }

  // --------------------------------------  Variables  --------------------------------------------

  headlines!:Headline[];

  indx:number=0;
  notes:any={
    tittle:["1"],
    content:["Primer contenido"],

    constructor(tittle:string, content:string){
      this.tittle.push(tittle);
      this.content.push(content);
    }
  };
  // Headline index
  headI:number=0
  
  // dark:string=""


  // ---------------------------------------  Methods  ---------------------------------------------

  changeNote(i:number){
    this.indx=i
  };

  add(){
    this.localStorageSv.addTask();
    this.headlines = this.localStorageSv.getUser.headlines;
    console.log(this.localStorageSv.getUser);
    // this.indx = (this.notes.tittle.length-1);
    this.indx = this.headlines[this.localStorageSv.headlineIndx].tasks.length - 1
  };
  pop(i:number){
    // this.dataSv.delNote(i)
    // this.notes.tittle.splice(i,1)
    // this.notes.content.splice(i,1)
    this.localStorageSv.delTask(i)
    this.headlines = this.localStorageSv.getUser.headlines;
    this.indx = 0
  }


  // -------------------------------------  Observables  -------------------------------------------
  // -----------------------------------------------------------------------------------------------

  


    // ----------------------------  Mock  ----------------------------------------

    // mock:User = new User("ric", "1@gmail.com", "qwerty", 0, "Ricardo", "Sande", [
    //   new Headline("N1 nada todavía", 0, [
    //     new Task("Task 0", 0, new Extension ("Contenido de Extension 0 ", 0, "Task 0")),
    //     new Task("Task 1", 1, new Extension ("Contenido de Extension 1 ", 1, "Task 1")),
    //     new Task("Task 2", 2, new Extension ("Contenido de Extension 2 ", 2, "Task 2")),
    //     new Task("Task 3", 3, new Extension ("Contenido de Extension 3 ", 3, "Task 3")),
    //     new Task("Task 4", 4, new Extension ("Contenido de Extension 4 ", 4, "Task 4")),
    //     new Task("t1",40, new Extension ("text extension", 40, "t1"))

    //   ]),
    //   new Headline("N2 nada todavía", 1, [
    //     new Task("Task 0", 5, new Extension ("Contenido de Extension 0 ", 5, "Extension 0")),
    //     new Task("Task 1", 6, new Extension ("Contenido de Extension 1 ", 6, "Extension 1"))
    //   ]),
    //   new Headline("N3 nada todavía", 2, [
    //     new Task("Task 0", 7, new Extension ("Contenido de Extension 0 ", 7, "Extension 0")),
    //     new Task("Task 1", 8, new Extension ("Contenido de Extension 1 ", 8, "Extension 1"))
    //   ])
    // ])
    // ---------------------------------------------------------------------------

}
