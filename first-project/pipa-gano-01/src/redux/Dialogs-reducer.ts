import { updateNewTextActionCreator } from './profile-reducer';
import { InitialTypeMessage, messageData } from './../type/state';

enum ActionType{
    'dialog/ADD-MESSAGE',
    'dialog/UPDATE-NEW-MESSAGE-TEXT',
    'dialog/GET-NAME'
}

let InitialState:InitialTypeMessage = {
    messageData: [
        {id:1,message:'hi ',name:"_QwOoki_"},
        {id:2,message:'hi ', name:"Yasya"},
        {id:3,message:'how are are you',name:"_QwOoki_"},
        {id:4,message:'im fine ',name:"Yasya"},
    ],
    dialogData: [
        {id:1,name:'Vadzha',},
        {id:2,name:'Yasya',},
        {id:3,name:'Oleg',},
        {id:4,name:'Max',},
        {id:5,name:'marko',},
      ],
    NewMessageText:'',
    MyName:""
}

export const DialogsReducer = (state = InitialState, action:ActionTypes):InitialTypeMessage =>{
    switch(action.type){
    case ActionType['dialog/UPDATE-NEW-MESSAGE-TEXT']:{
        return {
            ...state,
            NewMessageText: action.NewText,
        };}
    case ActionType['dialog/ADD-MESSAGE']:{
        let indificatorId=state.messageData[state.messageData.length-1].id

        let NewMessage:messageData={
          id: indificatorId+1,
          message: state.NewMessageText,
          name: state.MyName 
        };
    
        return {
            ...state,
            messageData:[...state.messageData, NewMessage],
            NewMessageText: "",
            
        };}
    case ActionType['dialog/GET-NAME']:{
        return{
            ...state,
            MyName: action.MyName
        }
    }
    default:
        return state;
    }
}
type ActionTypes = AddMessageActionCreatorType|updateNewTextActionCreatorType|getNameACType;

type AddMessageActionCreatorType={
    type: typeof ActionType['dialog/ADD-MESSAGE']
}

type updateNewTextActionCreatorType={
    type: typeof ActionType['dialog/UPDATE-NEW-MESSAGE-TEXT'],
    NewText?:string,
}

type getNameACType={
    type: typeof ActionType['dialog/GET-NAME'],
    MyName:string|null
}

export const AddMessageActionCreator = ():AddMessageActionCreatorType=>{
    return{
        type: ActionType['dialog/ADD-MESSAGE'],
    }
}

export const getNameAC=(MyName:string|null):getNameACType=>{
    return{
        type: ActionType['dialog/GET-NAME'],
        MyName
    }
}

export const UpdateNewMessageTextActionCreator = (NewText?:string):updateNewTextActionCreatorType=>{
    return{
        type: ActionType['dialog/UPDATE-NEW-MESSAGE-TEXT'],
        NewText,
    }
}

export default DialogsReducer;