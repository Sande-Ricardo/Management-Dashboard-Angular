import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharingService } from 'src/app/core/services/sharing.service';
import { Headline } from 'src/app/model/Headline';
import { User } from 'src/app/model/User';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  constructor(
    private sharingSv:SharingService
  ) {
    this.user$.subscribe(data => {
      console.log("Set headlines in NotesComponent");
      this.headlines = data.headlines;
    })
  }

  ngOnInit(): void {
  }

  // -------------------------------------  Observables  -------------------------------------------
  user$:Observable<User> = this.sharingSv.userObservable;

  // --------------------------------------  Variables  --------------------------------------------
  headlines!:Headline[];
  indx:number=0;
  headI:number=0
  
  // dark:string=""


  // ---------------------------------------  Methods  ---------------------------------------------
  changeNote(i:number){
    this.indx=i
  };

  add(){
  };
  pop(i:number){
  }

}
