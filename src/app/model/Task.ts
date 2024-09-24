
export class Task{
    idTask!:number;
    title!:string;
    content:string;


    constructor (title:string, cont:string, id?:number){
        this.title = title
        this.content = cont

        if(id){this.idTask=id};
        // id? (this.id=id)
    }
}