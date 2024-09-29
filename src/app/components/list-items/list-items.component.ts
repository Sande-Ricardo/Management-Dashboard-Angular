import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharingService } from 'src/app/core/services/sharing.service';
import { Headline } from 'src/app/model/Headline';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  constructor(
    public sharingSv:SharingService,
  ) {
    this.user$.subscribe(data=>{
      this.headlines = data.headlines;
    })

  }

  ngOnInit(): void {
  }

  // ------------------------------ Variables ----------------------------------
  // user?:User;
  // headI:number= 1;
  // taskI:number= 0;

  headlines!:Headline[];

  edit:boolean=false;

  // ----------------------------- Observables --------------------------------- ¡¡¡lo que llegan no son obsrvables!!!
  user$:Observable<User> = this.sharingSv.userObservable;

  // ------------------------------  Methods  ----------------------------------

  
  updateUser(bool?:boolean){
    if(bool){
      let user:any;
      this.user$.subscribe(data=>{user=data});
      user.headlines = this.headlines;
      this.sharingSv.updateUser(user as User);
      console.log("maniobra peligrosa 2");
    }else {
      this.sharingSv.updateUser();
      console.log("maniobra rara");
    }
  }
  
  addTask(){
    this.sharingSv.addTask();
  };

  changeEdit(){
    this.edit=!this.edit;
  }

  // ---------------------------------------------------------------------------

  
}
