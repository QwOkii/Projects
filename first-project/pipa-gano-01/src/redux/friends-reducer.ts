import { InitialTypeUser, StateType, UserData } from './../type/state';
import { UserAPI } from "../api/api";
import { help_follow_un } from "./help-reducer/profileObjectHelp";
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';



enum ActionType{
  'user/FOLLOW',
  'user/SET_CURRENT_PAGE',
  'user/TOGGLE_IS_FETCHING',
  'user/TOGGLE_IN_PROGRES',
  'user/SET_TOTAL_COUNT',
  'user/SET_USERS',
  'user/UN-FOLLOW'
}

let InitialState:InitialTypeUser ={
  UserData:[] as Array<UserData>,
  PageSize:15,
  totalUsersCount:0,
  currentPage:1,
  isFetching: false,
  followingInProgres: false,
  
}

const FriendsReducer = (state = InitialState, action:ActionCreatorTypes):InitialTypeUser =>{
    switch(action.type){
      case ActionType['user/FOLLOW']:{
        return{
          ...state,
          UserData: help_follow_un(state.UserData,action.UserID,"id",{followed:true})
        }
      }
      case ActionType['user/UN-FOLLOW']:{
        return{
          ...state,
          UserData: help_follow_un(state.UserData,action.UserID,"id",{followed:false})
      }}
      case ActionType['user/SET_USERS']:{
        return{
          ...state,
          UserData: action.ActionUserData
          
        }
      }
      case ActionType['user/SET_CURRENT_PAGE']:{
        return{
          ...state,
          currentPage: action.currentPage
        }
      }
      case ActionType['user/SET_TOTAL_COUNT']:{
        return{
          ...state,
          totalUsersCount: action.totalCount
        }
      }
      case ActionType['user/TOGGLE_IS_FETCHING']:{
        return{
          ...state , 
          isFetching: action.isFetching
        }
      }
      case ActionType['user/TOGGLE_IN_PROGRES']:{
        return{
          ...state,
          followingInProgres: action.isFetching
        }
      }
      default:
        return state;
      }    
    
}

type ActionCreatorTypes = acceptFollowType| acceptunFollowType| setCurrentPageType|setInProgresType|setIsFetchingType|setTotalCountType|setUsersType 


type acceptFollowType={
  type:typeof ActionType['user/FOLLOW'] ,
  UserID:number
}

type acceptunFollowType={
  type:typeof ActionType['user/UN-FOLLOW'] ,
  UserID:number
}

type setUsersType={
  type: typeof ActionType['user/SET_USERS'],
  ActionUserData:Array<UserData>
}

type setCurrentPageType ={
  type: typeof ActionType['user/SET_CURRENT_PAGE'],
  currentPage:number
}

type setTotalCountType ={
  type:typeof ActionType['user/SET_TOTAL_COUNT'],
  totalCount:number
}

type setIsFetchingType={
  type:typeof ActionType['user/TOGGLE_IS_FETCHING'],
  isFetching:boolean
}

type setInProgresType={
  type: typeof ActionType['user/TOGGLE_IN_PROGRES'],
  isFetching: boolean
}

export const acceptFollow = (UserID:number):acceptFollowType =>{
    return{
      type:ActionType['user/FOLLOW'] ,
      UserID
    };
}

export const acceptunFollow  = (UserID:number):acceptunFollowType =>{
    return{
      type:ActionType['user/UN-FOLLOW'],
      UserID
    };
}

export const setUsers  = (UserData:Array<UserData>):setUsersType =>{
  return{
    type: ActionType['user/SET_USERS'],
    ActionUserData:UserData
  };
}

export const setCurrentPage  = (currentPage:number):setCurrentPageType =>{
  return{
    type: ActionType['user/SET_CURRENT_PAGE'],
    currentPage
  };
}

export const setTotalCount  = (totalCount:number):setTotalCountType =>{
  return{
    type: ActionType['user/SET_TOTAL_COUNT'],
    totalCount
  };
}

export const setIsFetching  =(isFetching:boolean):setIsFetchingType =>{
  return{
    type: ActionType['user/TOGGLE_IS_FETCHING'],
    isFetching
  }
}

export const setInProgres  =(ProgresFollowing :boolean):setInProgresType =>{
  return{
    type: ActionType['user/TOGGLE_IN_PROGRES'],
    isFetching: ProgresFollowing
  }
}

//thunk
type ThunkType = ThunkAction<Promise<void>,StateType,unknown,ActionCreatorTypes>;


export const getUsersThunkCreator =(currentPage:number,PageSize:number):ThunkType=>{
  return async (dispath)=>{
  dispath(setIsFetching(true));
  
  let data = await UserAPI.UserGet(currentPage,PageSize)

  dispath(setCurrentPage(currentPage));
  dispath(setIsFetching(false));
  dispath(setUsers(data.items));
  dispath(setTotalCount(data.totalCount));

}}

const info_un_follow =async (dispath:Dispatch<ActionCreatorTypes>,id:number, ApiMethod: any, actionCreator:typeof acceptFollow| typeof acceptunFollow) =>{ 
  dispath(setInProgres(true));

  let response = await ApiMethod(id);

  if(response.data.resultCode===0){
    dispath(actionCreator(id));
    dispath(setInProgres(false));
  }
}

export const unFollow = (id:number):ThunkType =>{ 
  return async(dispath)=>{
    info_un_follow(dispath,id, UserAPI.UserDelete,acceptunFollow)
  }
}

export const Follow = (id:number):ThunkType =>{ 
  return async (dispath)=>{
    info_un_follow(dispath,id,UserAPI.UserPost,acceptFollow)
  }
}


export default FriendsReducer;