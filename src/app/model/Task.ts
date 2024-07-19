import { Extension } from './Extension';

export class Task{
    id!:number;
    content:string;
    id_headline!:string;

    extension:Extension|undefined;

    constructor (cont:string){
        this.content = cont
    }
}