
export interface UserDataType
{
    isInit: boolean;
    uuid:string;
    name:string;
    surname:string;
    skillLevel:number;
    emergencyContact:string;
    caretakerUUID:string;  
    isTTS:boolean;
    gender:Gender;
}


export type Gender = "MALE"|"FAMALE"