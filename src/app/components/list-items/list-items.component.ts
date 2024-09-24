import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharingService } from 'src/app/core/services/sharing.service';
import { Headline } from 'src/app/model/Headline';
import { Task } from 'src/app/model/Task';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  // @Input() task!:string[];
  // @Input() headlines!:Headline[];

// ¡¡¡¡ ME CONVIENE UTILIZAR UN UNICO OBSERVABLE PARA LA INFORMACIÓN DEL USUARIO !!!! (creo que mando toda la info a el componente padre y enlazo todo con ngModel)

  constructor(
    public sharingSv:SharingService
  ) {
  }

  ngOnInit(): void {
  }

  // ------------------------------ Variables ----------------------------------
  // user?:User;
  headI:number= 1;
  taskI:number= 0;

  headlines!:Headline[];

  // ----------------------------- Observables --------------------------------- ¡¡¡lo que llegan no son obsrvables!!!
  user$:Observable<User> = this.sharingSv.userObservable;

  // ------------------------------  Methods  ----------------------------------

  addItem(){
    this.sharingSv.user?.headlines[0].tasks.push(new Task("New Task", "New content"))
    this.sharingSv.modUser()
  }

  // ---------------------------------------------------------------------------

  taskIndx(i:number){
    this.taskI = i;
  }


  test1(){
    // console.log(this.localStorageSv.getUser)
  }

  // items:string[] = []

  // ---------------------------------------------------------------------------
}
