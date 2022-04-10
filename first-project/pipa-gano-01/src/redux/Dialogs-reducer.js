const type_AddMessage ='dialog/ADD-MESSAGE';
const type_UpdateNewMessageText ='dialog/UPDATE-NEW-MESSAGE-TEXT';

let InitialState = {
    messageData: [
        {id:1,message:'hihdjjskdskjsdjsjksskdkksdkskdkdsjsjjjsdjjsjsdjjsdjsdjjsdjsjjsjdjs',},
        {id:2,message:'why you drink wine ',},
        {id:3,message:'how is your learning',},
        {id:4,message:'ipi',},
    ],
    dialogData: [
        {id:'1',name:'Vadzha',},
        {id:'2',name:'Yasya',},
        {id:'3',name:'Oleg',},
        {id:'4',name:'Max',},
        {id:'5',name:'Romanich',},
      ],
    NewMessageText:'',
}

export const DialogsReducer = (state = InitialState, action) =>{

    switch(action.type){
    case type_UpdateNewMessageText:{
        return {
            ...state,
            NewMessageText: action.NewText,
        };}
    case type_AddMessage:{
        let NewMessage={
          id: 5,
          message: state.NewMessageText,
        };

        return {
            ...state,
            ...state.messageData.push(NewMessage),
            NewMessageText: "",
            
        };}
    default:
        return state;
    }
}

export const AddMessageActionCreator = ()=>{
    return{
        type: type_AddMessage,
    }
  }
  export const UpdateNewMessageTextActionCreator = (text)=>{
    return{
        type: type_UpdateNewMessageText,
        NewText:text,
    }
  }

export default DialogsReducer;