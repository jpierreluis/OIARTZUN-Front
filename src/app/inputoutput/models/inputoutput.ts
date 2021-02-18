import { ItemInputoutput } from "./item-inputoutput";

export class Inputoutput {
    id:number=0;
    description:string="";
    isInput:boolean=true;
    createAt:string="";
    updateAt:string="";
    items:Array<ItemInputoutput> = [];
}
