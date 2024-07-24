import { Extension } from './Extension';

export class Task{
    id!:number;
    id_headline!:string;
    
    content:string;

    extension!:Extension;

    constructor (cont:string, id?:number, extension?:Extension){
        this.content = cont

        if(id){this.id=id};
        if(extension){this.extension=extension};
    }
}