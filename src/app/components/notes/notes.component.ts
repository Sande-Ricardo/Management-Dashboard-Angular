import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/principal-page/data-service.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor( public dataSv:DataServiceService) { }

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



}
