import { ActionType} from './../../types/types';



export const setBlnakAC = (blank:any)=>{
    return{
        type:ActionType.SET_BLANK,
        blank
    }
}

export const deleteBlankAC =(id:number)=>{
    return{
        type:ActionType.DELETE_BLANK,
        id
    }
}

export const editBlankAC =(id:number)=>{
    return{
        type:ActionType.EDIT_BLANK,
        id
    }
}