import { boolean } from "yup"


export interface Blank{
    id?:number,
    name?:string,
    rate?:number,
    count?:number,
    term?:number,
}

export enum ActionType{
    SET_BLANK="SET-BLANK",
    DELETE_BLANK="DELETE-BLANK",
    EDIT_BLANK="EDIT-BLANK"
}

export interface StateType{
    blank:any[],
    lenght:Boolean|null,
    Sblank:{id:number,name:string,count:number,rate:number,term:number},
     mode:boolean
}
export type initialAction = SetBlnak | DeleteBlnak | EditBlnak

export interface SetBlnak{
    type:ActionType.SET_BLANK,
    blank:any[]
}
export interface DeleteBlnak{
    type:ActionType.DELETE_BLANK,
    id:number
}
export interface EditBlnak{
    type:ActionType.EDIT_BLANK,
    id:number
}
