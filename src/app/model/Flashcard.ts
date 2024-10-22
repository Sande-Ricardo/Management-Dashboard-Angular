
export class Flashcard{
    idFlashCard!:number;
    title:string;
    content:string;
    
    constructor (title:string, content:string, idFlashCard?:number){
        this.title = title;
        this.content = content;
        if(idFlashCard){this.idFlashCard=idFlashCard}
    }
}