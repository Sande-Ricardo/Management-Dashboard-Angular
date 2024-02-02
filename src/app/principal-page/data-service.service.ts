import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  notes:any={
    tittle:["1"],
    content:["Primer contenido"],

    constructor(tittle:string, content:string){
      this.tittle.push(tittle);
      this.content.push(content);
    }
  };

  items:string []=[
      "uno",
      "2",
      "tres",
      "uno",
      "uno",
      "uno",
      "uno"
  ];

  addNote(){
    this.notes.constructor("Tittle","")
  };
  delNote(i:number){
    this.notes.tittle.splice(i,1)
    this.notes.content.splice(i,1)
  }

  addItem(){
    this.items.push("")
  };
  delItem(i:number){
    this.items.splice(i, 1)
  };
}
