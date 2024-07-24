import { Task } from "./Task";

export class Headline{
    id!:number;
    id_user!:number;

    content:string;
    
    tasks!:Task[];

    constructor (cont:string,id?:number, tasks?:Task[]){
        this.content=cont;

        if(id){this.id=id};
        if(tasks){this.tasks=tasks}
    }
}