import { UserAPI } from "../api/api";
import { help_follow_un } from "./help-reducer/profileObjectHelp";

const type_Follow = 'user/FOLLOW';
const type_unFollow ='user/UN-FOLLOW',
type_SET_USERS ='user/SET_USERS',
type_SET_TOTAL_COUNT ='user/SET_TOTAL_COUNT',
type_TOGGLE_IS_FETCHING ='user/TOGGLE_IS_FETCHING',
type_TOGGLE_IN_PROGRES ='user/TOGGLE_IN_PROGRES',
type_SET_CURRENT_PAGE ='user/SET_CURRENT_PAGE';

let InitialState ={
  UserData: [],
  PageSize:15,
  totalUsersCount:0,
  currentPage:1,
  isFetching: false,
  followingInProgres: false,
  
}

const FriendsReducer = (state = InitialState, action) =>{
    switch(action.type){
      case type_Follow:{
        return{
          ...state,
          UserData: help_follow_un(state.UserData,action.UserID,"id",{followed:true})
        }
      }
      case type_unFollow:{
        return{
          ...state,
          UserData: help_follow_un(state.UserData,action.UserID,"id",{followed:false})
      }}
      case type_SET_USERS:{
        return{
          ...state,
         UserData: action.UserData
        }
      }
      case type_SET_CURRENT_PAGE:{
        return{
          ...state,
          currentPage: action.currentPage
        }
      }
      case type_SET_TOTAL_COUNT:{
        return{
          ...state,
          totalUsersCount: action.totalCount
        }
      }
      case type_TOGGLE_IS_FETCHING:{
        return{
          ...state , 
          isFetching: action.isFetching
        }
      }
      case type_TOGGLE_IN_PROGRES:{
        return{
          ...state,
          followingInProgres: action.followingInProgres
        }
      }
      default:
        return state;
      }    
    
}

export const acceptFollow = (UserID) =>{
    return{
      type:type_Follow,
      UserID
    };
}
export const acceptunFollow  = (UserID) =>{
    return{
      type:type_unFollow,
      UserID
    };
}
export const setUsers  = (UserData) =>{
    return{
      type: type_SET_USERS,
      UserData
      
    };
}
export const setCurrentPage  = (currentPage) =>{
    return{
      
      type: type_SET_CURRENT_PAGE,
      currentPage
      
    };
}
export const setTotalCount  = (totalCount) =>{
    return{
      
      type: type_SET_TOTAL_COUNT,
      totalCount  
      
    };
}
export const setIsFetching  =(isFetching) =>{
  return{
    type: type_TOGGLE_IS_FETCHING,
    isFetching
  }
}
export const setInProgres  =(ProgresFollowing) =>{
  return{
    type: type_TOGGLE_IN_PROGRES,
    isFetching: ProgresFollowing
  }
}



export const getUsersThunkCreator =(currentPage,PageSize)=>{
  return async (dispath)=>{
  dispath(setIsFetching(true));

  let data = await UserAPI.UserGet(currentPage,PageSize)

  dispath(setCurrentPage(currentPage));
  dispath(setIsFetching(false));
  dispath(setUsers(data.items));
  dispath(setTotalCount(data.totalCount));

}}

const info_un_follow =async (dispath,id, ApiMethod, actionCreator) =>{ 
   
    dispath(setInProgres(true));

    let response = await ApiMethod(id);
    if(response.data.resultCode===0){
      dispath(actionCreator(id));
      dispath(setInProgres(false));
    }
  
}

export const unFollow = (id) =>{ 
   return async(dispath)=>{
    info_un_follow(dispath,id, UserAPI.UserDelete,acceptunFollow)
  }
}
export const Follow = (id) =>{ 
  return async (dispath)=>{
    info_un_follow(dispath,id,UserAPI.UserPost,acceptFollow)
  }
}


export default FriendsReducer;