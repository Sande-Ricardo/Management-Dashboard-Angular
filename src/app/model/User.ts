import { Headline } from "./Headline";

export class User{
    id!: number;
    name!:string;
    last_name!:string;
    
    username:string;
    email:string;
    password:string;

    headlines!:Headline[];


    constructor (uName:string, email:string, pass:string, id?:number, name?:string, lName?:string, headlines?:Headline[]){
        this.username=uName;
        this.email=email;
        this.password=pass;

        if(id){this.id=id;}
        if(name){this.name=name;}
        if(lName){this.last_name=lName;}
        if(headlines){this.headlines=headlines;}
    }
}