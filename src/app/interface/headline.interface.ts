import { Task } from "./task.interface";

export interface Headline {
    idHeadline:number | null | undefined;
    content:string;

    tasks:Task[];

}
