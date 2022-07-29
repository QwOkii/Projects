import { InitialTypeAuth, StateType } from './../type/state';
import { UserAPI } from "../api/api";
import { ThunkAction } from 'redux-thunk';


enum ActionType{
  "auth/SET_USER_DATA",
  "auth/SET-CAPTCHA"
}

let InitialState:InitialTypeAuth ={
  id:null,
  email: null,
  login:null,
  isAuth:false,
  captchaURL:null
  
}

const authReducer = (state = InitialState, action:ActionCreatorTypes):InitialTypeAuth =>{
    switch(action.type){
      case ActionType['auth/SET_USER_DATA']:{
        console.log(action.payload)
        return{
          ...state,
          isAuth: action.payload.isAuth,
          email:action.payload.email,
          login:action.payload.login,
          id:action.payload.id
        }
      }
      case ActionType['auth/SET-CAPTCHA']:{
        return{
          ...state,
          captchaURL:action.captchaURL
        }
      }
    default:
       return state;
    }
}

type ActionCreatorTypes =setUserDataType|GetCaptchaACType;

type setUserDataType={
  type: typeof ActionType['auth/SET_USER_DATA']
  payload:{
    email:string|null,
    id:number|null,
    login:string|null,
    isAuth:boolean|null
  }
}
type GetCaptchaACType={
  type:typeof ActionType['auth/SET-CAPTCHA']
  captchaURL:string|null
}

export const GetCaptchaAC =(captchaURL:string|null):GetCaptchaACType=>{
  return{
    type:ActionType['auth/SET-CAPTCHA'],
    captchaURL
  }
}

export const SetUserData = (email:string|null,id:number|null,login:string|null, isAuth:boolean|null):setUserDataType =>{
  return({type:ActionType['auth/SET_USER_DATA'], payload:{email,id,login,isAuth}})

}


type ThunkType = ThunkAction<Promise<void>,StateType,unknown,ActionCreatorTypes>;

export const AuthMeUpdate=():ThunkType =>{
   return async (dispath)=>{
  let data =await UserAPI.AuthMe();
      console.log(data)
    let {email,id,login} = data.data;
    dispath(SetUserData(email,id,login,true));
  }
}

export const GETCaptchaUrl =():ThunkType=>{
  return async (dispath)=>{
    const data = await UserAPI.GetCaptchaUrl()
    dispath(GetCaptchaAC(data.url))
  }
}

export const login=(email:string,password:string,captcha:string|null,rememberMe?:boolean):ThunkType=>{
  return async (dispath)=>{
  let data = await UserAPI.AuthLoginPost(email,password,captcha,rememberMe)
    console.log(data)
    if(data.resultCode === 0){
      dispath(AuthMeUpdate());
      
    }
    else{
      if(data.resultCode === 10){
        dispath(GETCaptchaUrl())
      }
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