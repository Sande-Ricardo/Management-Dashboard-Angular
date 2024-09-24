import { Headline } from "./headline.interface";

export interface User{
    idUser:number;
    name:string;
    last_name:string;
    username:string;
    email:string;
    password:string;

    headlines:Headline[];
}