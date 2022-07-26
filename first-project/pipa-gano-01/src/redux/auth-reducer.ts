import { InitialTypeAuth, StateType } from './../type/state';
import { UserAPI } from "../api/api";
import { ThunkAction } from 'redux-thunk';


const type_SET_USER_DATA ="auth/SET_USER_DATA";


let InitialState:InitialTypeAuth ={
  id:null,
  email: null,
  login:null,
  isAuth:false
  
}

const authReducer = (state = InitialState, action:ActionCreatorTypes):InitialTypeAuth =>{
    switch(action.type){
      case type_SET_USER_DATA:{
        console.log(action.payload)
        return{
          ...state,
          isAuth: action.payload.isAuth,
          email:action.payload.email,
          login:action.payload.login,
          id:action.payload.id
        }
      }
    default:
       return state;
    }
}

type ActionCreatorTypes =setUserDataType;

type setUserDataType={
  type: typeof type_SET_USER_DATA
  payload:{
    email:string|null,
    id:number|null,
    login:string|null,
    isAuth:boolean|null
  }
}

export const SetUserData = (email:string|null,id:number|null,login:string|null, isAuth:boolean|null):setUserDataType =>
({type:type_SET_USER_DATA, payload:{email,id,login,isAuth}})

type ThunkType = ThunkAction<Promise<void>,StateType,unknown,ActionCreatorTypes>;

export const AuthMeUpdate=():ThunkType =>{
   return async (dispath)=>{
  let data =await UserAPI.AuthMe();
      console.log(data)
    let {email,id,login} = data.data;
    dispath(SetUserData(email,id,login,true));
  }
}
export const login=(email:string,password:string,rememberMe?:boolean):ThunkType=>{
  return async (dispath)=>{
  let data = await UserAPI.AuthLoginPost(email,password,rememberMe)
    if(data.resultCode=== 0){
      dispath(AuthMeUpdate());
    }
  }
}
export const logout = ():ThunkType=>{ 
  return async (dispath)=>{
   await UserAPI.AuthLoginDelete()
    dispath(SetUserData(null,null,null,false));
  }
}


export default authReducer;