import { Headline } from "../model/Headline";

export interface User{
    id: number;
    name:string;
    last_name:string;
    username:string;
    email:string;
    password:string;

    headlines:Headline[];

}