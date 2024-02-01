import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }


  items:string []=[
      "uno",
      "2",
      "tres",
      "uno",
      "uno",
      "uno",
      "uno"
  ]

  addItem(){
    this.items.push("")
  }
  delItem(i:number){
    this.items.splice(i, 1)
  }
}
