import { UserAPI } from "../api/api";


const type_SET_USER_DATA ="auth/SET_USER_DATA";


let InitialState ={
  id:null,
  email: null,
  login:null,
  isAuth:false
  
}

const authReducer = (state = InitialState, action) =>{
    switch(action.type){
      case type_SET_USER_DATA:{
        return{
          ...state,
          ...action.payload,
          isAuth: action.payload.isAuth,
        }
      }
    default:
       return state;
    }
}

export const SetUserData = (email,id,login, isAuth) =>({type:type_SET_USER_DATA, payload:{email,id,login,isAuth}})

export const AuthMeUpdate=()=>{ return async (dispath)=>{
  let data =await UserAPI.AuthMe();
      console.log(data)
    let {email,id,login} = data.data;
    dispath(SetUserData(email,id,login,true));
  }
}
export const login=(email,password,rememberMe)=>{ return async (dispath)=>{
  let data = await UserAPI.AuthLoginPost(email,password,rememberMe)
    if(data.resultCode=== 0){
      dispath(AuthMeUpdate());
    }
      
      
    
  }
}
export const logout=()=>{ return async (dispath)=>{
   await UserAPI.AuthLoginDelete()
    dispath(SetUserData(null,null,null,false));
  }
}


export default authReducer;