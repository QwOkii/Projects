
import { PostData, InitialTypeProfile, ProfileType, StateType } from './../type/state';
import { ProfileAPI } from "../api/api";
import { ThunkAction } from 'redux-thunk';


enum ActionType{
  'profile/UPDATE-NEW-POST-TEXT',
  'profile/ADD-POST',
  'profile/SET-STATUS',
  'profile/SET_USER_PROFILE'
}


let InitialState:InitialTypeProfile ={
  PostData: [
    {id:1,post:'hi how are you', likeCount:12,},
    {id:2,post:'hi ',likeCount:1,},
    {id:3,post:'syp nsjdjjs',likeCount:10,},
    {id:4,post:'skkakskak',likeCount:75,},],

  NewPostText:'',
  profile:null,
  status:'yooo blck man',
}

const ProfileReducer = (state:InitialTypeProfile = InitialState, action:ActionCreatorTypes):InitialTypeProfile =>{
  switch(action.type){
  case ActionType['profile/ADD-POST']:{
    let NewPost:PostData={
      id:5,
      post: state.NewPostText,
      likeCount:0,
    };
    return {
      ...state,
      PostData: [...state.PostData,NewPost],
      NewPostText:''
    }
  }
  case ActionType['profile/UPDATE-NEW-POST-TEXT']:
  return{
      ...state,
      NewPostText: action.NewText
  }
  case ActionType['profile/SET_USER_PROFILE']:{
    return{
      ...state ,
      profile: action.profile
    }
  }
  case ActionType['profile/SET-STATUS']:{
    return{
      ...state ,
      status: action.status
    }
  }
  default:
      return state;
  }    
  
}

type ActionCreatorTypes= AddPostACType|updateNewTextActionCreatoType|setStatusType|setUserProfileType;

type AddPostACType={
  type:typeof ActionType['profile/ADD-POST']
};

type updateNewTextActionCreatoType={
  type:typeof ActionType['profile/UPDATE-NEW-POST-TEXT'],
  NewText: string
};

type setStatusType={
  type:typeof ActionType['profile/SET-STATUS'],
  status:string
}

type setUserProfileType={
  type:typeof ActionType['profile/SET_USER_PROFILE'],
    profile: ProfileType
}

export const addPostActionCreator = ():AddPostACType =>{
  return{
    type:ActionType['profile/ADD-POST']
  };
};
  
export const updateNewTextActionCreator =(text:any):updateNewTextActionCreatoType => {
  return{
    type: ActionType['profile/UPDATE-NEW-POST-TEXT'],
    NewText: text
  };
};


export const setStatus =(status:any):setStatusType =>{
  return{
    type:ActionType['profile/SET-STATUS'],
    status
  }
}

export const setUserProfile =(profile:any):setUserProfileType => {
  return{
    type:ActionType['profile/SET_USER_PROFILE'],
    profile
  };
}

//thunk
type ThunkType = ThunkAction<Promise<void>,StateType,unknown,ActionCreatorTypes>;

export const getPerson = (userId = 22847):ThunkType =>{
  return async (dispath)=>{
  let data = await ProfileAPI.ProfileGet(userId);
  dispath(setUserProfile(data));
}}

export const getStatus = (userId:number):ThunkType =>{
  return async (dispath)=>{
  let data = await ProfileAPI.ProfileStatusGet(userId)
  
  dispath(setStatus(data));
}}

export const updateStatus = (state:string):ThunkType=>{
  return async (dispath)=>{
    
  let data = await ProfileAPI.ProfileStatusPut(state)
  if(data.resultCode ===0){
    dispath(setStatus(state));
  }
}}


export default ProfileReducer;