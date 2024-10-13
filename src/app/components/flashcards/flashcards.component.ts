import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

// mock
    this.title=   ["Title 1","Title 2","Title 3","Title 4","Title 5"]
    this.content= ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum omnis corporis veritatis ipsa veniam quasi enim odio? Adipisci possimus necessitatibus sint eligendi sequi inventore nesciunt modi doloremque! Tempore, ex ut!","Content 2","Content 3","Content 4","Content 5"]
  }


// -----------------------------------------  Variables  -------------------------------------------
  title:string[] = [];
  content:string[] = [];
  index:number = 1;

// ------------------------------------------  Methods  --------------------------------------------

changeCard(direction:boolean){
  if (direction) {
    if(this.title.length > this.index + 1){
      this.index++;
    } else {
      this.index = 0;
    }
  } else {
    if(0 < this.index){
      this.index--;
    } else {
      this.index = this.title.length -1;
    }
  }
}

}
