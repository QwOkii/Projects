import { updateNewTextActionCreator } from './profile-reducer';
import { InitialTypeMessage } from './../type/state';

enum ActionType{
    'dialog/ADD-MESSAGE',
    'dialog/UPDATE-NEW-MESSAGE-TEXT'
}

let InitialState:InitialTypeMessage = {
    messageData: [
        {id:1,message:'hihdjjskdskjsdjsj',},
        {id:2,message:'why you drink wine ',},
        {id:3,message:'how is your learning',},
        {id:4,message:'ipi',},
    ],
    dialogData: [
        {id:1,name:'Vadzha',},
        {id:2,name:'Yasya',},
        {id:3,name:'Oleg',},
        {id:4,name:'Max',},
        {id:5,name:'Romanich',},
      ],
    NewMessageText:'',
}

export const DialogsReducer = (state = InitialState, action:any):InitialTypeMessage =>{
    switch(action.type){
    case ActionType['dialog/UPDATE-NEW-MESSAGE-TEXT']:{
        return {
            ...state,
            NewMessageText: action.NewText,
        };}
    case ActionType['dialog/ADD-MESSAGE']:{
        let NewMessage={
          id: 5,
          message: state.NewMessageText,
        };

        return {
            ...state,
            messageData:[...state.messageData, NewMessage],
            NewMessageText: "",
            
        };}
    default:
        return state;
    }
}

type AddMessageActionCreatorType={
    type: typeof ActionType['dialog/ADD-MESSAGE']
}

type updateNewTextActionCreatorType={
    type: typeof ActionType['dialog/UPDATE-NEW-MESSAGE-TEXT'],
    NewText:string,
}

export const AddMessageActionCreator = ():AddMessageActionCreatorType=>{
    return{
        type: ActionType['dialog/ADD-MESSAGE'],
    }
}
export const UpdateNewMessageTextActionCreator = (NewText:string):updateNewTextActionCreatorType=>{
    return{
        type: ActionType['dialog/UPDATE-NEW-MESSAGE-TEXT'],
        NewText,
    }
}

export default DialogsReducer;