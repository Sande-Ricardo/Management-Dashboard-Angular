import { Extension } from './Extension';

export class Task{
    id!:number;
    id_headline!:string;
    
    content:string;

    extension!:Extension;

    constructor (cont:string, extension?:Extension, id?:number){
        this.content = cont

        if(id){this.id=id};
        if(extension){this.extension=extension};
    }
}