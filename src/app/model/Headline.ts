import { Task } from "./Task";

export class Headline{
    idHeadline!:number;
    content:string;
    
    tasks!:Task[];

    constructor (cont:string, tasks?:Task[],id?:number){
        this.content=cont;

        if(tasks){this.tasks=tasks}
        if(id){this.idHeadline=id};
    }
}