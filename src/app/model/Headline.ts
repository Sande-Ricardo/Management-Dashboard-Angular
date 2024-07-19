
export class Headline{
    id!:number;
    content:string;
    id_user!:number;
    
    tasks!:Task[];

    constructor (cont:string){
        this.content=cont;
    }
}