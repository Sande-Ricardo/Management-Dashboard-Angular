import { Flashcard } from "./Flashcard";
import { Headline } from "./Headline";

export class User{
    idUser!: number;
    name!:string;
    last_name!:string;

    username:string;
    email:string;
    password:string;

    headlines!:Headline[];
    flashCards!:Flashcard[];


    constructor (uName:string, email:string, pass:string, name?:string, lName?:string, headlines?:Headline[], flashcard?:Flashcard[], id?:number){
        this.username=uName;
        this.email=email;
        this.password=pass;

        if(name){this.name=name};
        if(lName){this.last_name=lName};
        // lName ? this.last_name=lName;
        if(headlines){this.headlines=headlines};
        if(flashcard){this.flashCards=flashcard};
        if(id){this.idUser=id;}
    }
}