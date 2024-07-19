import { Headline } from "./Headline";

export class User{
    public id!: number;
    name!:string;
    public last_name!:string;
    username:string;
    email:string;
    password:string;

    headlines!:Headline[];


    constructor (uName:string, email:string, pass:string){
        this.username=uName;
        this.email=email;
        this.password=pass;
    }
}