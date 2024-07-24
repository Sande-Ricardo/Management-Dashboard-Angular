
export class Extension{
    id!:number;
    tittle!:string;
    
    content:string;

    id_task!:number;




    constructor (cont:string, id?:number,tittle?:string){
        this.content=cont

        if(id){this.id=id};
        if(tittle){this.tittle=tittle}
    }
}