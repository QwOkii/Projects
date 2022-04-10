import DialogsReducer from "./Dialogs-reducer";
import NewsReducer from "./News-reducer";
import ProfileReducer from "./profile-reducer";

let store ={
  _state:{
    ProfilePage:{
      PostData: [
      {id:1,post:'hi how are you', likesCount:'12',},
      {id:2,post:'hi ',likesCount:'1',},
      {id:3,post:'syp nigga',likesCount:'10',},
      {id:4,post:'why do you like sock dick',likesCount:'75',},
    ],
      NewPostText:'',
    },
    
    MessagePage:{
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
      NewMessageText:"",
    },
    
    NewsPage:{},
  },
  _callSubscriber() {
    console.log('STATE IS CHANGE!!')
  },
  getState(){
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action){

    this._state.ProfilePage = ProfileReducer(this._state.ProfilePage,action);
    this._state.MessagePage = DialogsReducer(this._state.MessagePage,action);
    this._state.NewsPage = NewsReducer(this._state.NewsPage,action);

    this._callSubscriber(this._state);
  },
}

export default store;

