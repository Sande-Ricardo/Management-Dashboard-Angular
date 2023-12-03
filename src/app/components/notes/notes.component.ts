import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() { }

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
  
  dark:string=""
  
  changeNote(i:number){
    this.indx=i
  };

  add(){
    this.notes.constructor("Tittle","");
    this.indx = (this.notes.tittle.length-1);
    console.log(this.indx)
  };
  pop(i:number){
    this.notes.tittle.splice(this.indx,1)
    this.notes.content.splice(this.indx,1)

  }



}
