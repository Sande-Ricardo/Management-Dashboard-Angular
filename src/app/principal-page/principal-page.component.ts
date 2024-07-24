import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../core/services/login.service';
import { Headline } from '../model/Headline';
import { Task } from '../model/Task';
import { User } from '../model/User';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent implements OnInit {

  constructor( private loginSv:LoginService ) {
    this.user$ = loginSv.observableUser;
    this.user$.subscribe(data =>{
      console.log (data);
      // para definir las headlines
      this.headlines = data.headlines;
      // para definir las tasks (REVISAR) (queda feo)
      this.tasks = this.headlines[0].tasks as unknown as Task[];
      this.taskTittles = this.tasks.forEach((tittle) => tittle.content) as unknown as string[]
    } );
    
  }

  user$:Observable<User>
  
  ngOnInit(): void {
  }

  displayN:string="display1"
  expand:boolean=false;
  display:string[]=["","","",""];
  displayM:string[]=["","displayNoneM","displayNoneM","displayNoneM"];


  headlines!:Headline[];
  tasks!:Task[];
  taskTittles!:string[];

  



  changeExpand(){
    this.expand = !this.expand
  };
  
  changeDisplay(n:number){
    this.displayN = "display"+n;
    console.log(this.displayN)
  }

  changeCard(n:number){
    this.display = ["displayNone","displayNone","displayNone","displayNone"]
    this.display[n] = "";
  };
  changeCardM(n:number){
    this.display = ["displayNoneM","displayNoneM","displayNoneM","displayNoneM"]
    this.displayM[n] = ""
};
  

}
