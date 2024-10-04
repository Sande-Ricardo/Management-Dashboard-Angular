import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharingService } from 'src/app/core/services/sharing.service';
import { Task } from 'src/app/model/Task';
import { User } from 'src/app/model/User';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  constructor(
    public sharingSv:SharingService
  ) {
    this.user$.subscribe(data => {
      console.log("Set Tasks in NotesComponent");
      this.tasks = data.headlines[sharingSv.headlineIndex].tasks;
    })

  }

  ngOnInit(): void {
  }

  // -------------------------------------  Observables  -------------------------------------------
  user$:Observable<User> = this.sharingSv.userObservable;

  // --------------------------------------  Variables  --------------------------------------------
  // user!:User;
  tasks!:Task[];
  taskIndex:number=0;
  
  // dark:string=""


  // ---------------------------------------  Methods  ---------------------------------------------
  updateUser(bool?:boolean){
    if(bool){
      let user:any;
      this.user$.subscribe(data=>{user=data});
      user.headlines[this.sharingSv.headlineIndex].tasks = this.tasks;
      this.sharingSv.updateUser(user as User);
      console.log("maniobra peligrosa");
    }else {
      this.sharingSv.updateUser();
    }
  }
  
  changeTaskI(i:number){
    this.taskIndex=i
  };

  addTask(){
    this.sharingSv.addTask();
  };
  delTask(i:number){
    if(i!=0){
      this.changeTaskI(i-1);
    } else {
      this.changeTaskI(0);
    }
    this.sharingSv.delTask(i);
  }


}
