import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharingService } from 'src/app/core/services/sharing.service';
import { Flashcard } from 'src/app/model/Flashcard';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent implements OnInit {

  @Input() editing!:boolean;

  constructor(
    public sharingSv:SharingService
  ) {
      this.user$.subscribe(data =>{
        console.log("Set Flashcards in FlashcardsComponent");
        this.flashcards = data.flashCards;
    })
    
    if (this.flashcards.length == 0){
      this.delFlashcard();
    }
    
  }

  ngOnInit(): void {

// mock
    this.title=   ["Title 1","Title 2","Title 3","Title 4","Title 5"]
    this.content= ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum omnis corporis veritatis ipsa veniam quasi enim odio? Adipisci possimus necessitatibus sint eligendi sequi inventore nesciunt modi doloremque! Tempore, ex ut!","Content 2","Content 3","Content 4","Content 5"]
  }

// ----------------------------------------  Observable  -------------------------------------------
  user$:Observable<User> = this.sharingSv.userObservable;

// -----------------------------------------  Variables  -------------------------------------------
  flashcards!:Flashcard[];
  index:number = 0;

  textInput:boolean=this.editing;

  title:string[] = [];
  content:string[] = [];

// ------------------------------------------  Methods  --------------------------------------------

  changeCard(direction:boolean){
    if (direction) {
      if(this.flashcards.length > this.index + 1){
        this.index++;
      } else {
        this.index = 0;
      }
    } else {
      if(0 < this.index){
        this.index--;
      } else {
        this.index = this.flashcards.length -1;
      }
    }
  }
  updateUser(bool?:boolean){
    if(bool){
      let user:any;
      this.user$.subscribe(data=>{user=data});
      user.flashCards = this.flashcards;
      this.sharingSv.updateUser(user as User);
      console.log("maniobra peligrosa");
    }else {
      this.sharingSv.updateUser();
    }
  }

  editFlashcard(){
    if(this.textInput){
      this.updateUser(true)
    };
    this.textInput = !this.textInput
  };

  addFlashcard(){
    this.sharingSv.addFlashcard(this.index+1);
    this.user$.subscribe(data =>{
      this.flashcards = data.flashCards;
    })
  };

  // hace falta revisar
  delFlashcard(){
    if(this.flashcards.length == 1){
      console.error("You cannot have less than one flashcard")
    } else {
      this.sharingSv.delFlashcard(this.index);
      this.user$.subscribe(data =>{
        this.flashcards = data.flashCards;
      })
      if(this.index == this.flashcards.length){
        this.index--;
      }
    }
  };

}
