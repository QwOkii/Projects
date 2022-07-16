import { ProfileAPI } from "../api/api";

const type_UpdateNewPostText = 'profile/UPDATE-NEW-POST-TEXT',
type_AddPost ='profile/ADD-POST',
type_SET_STATUS ='profile/SET-STATUS',
type_SET_USER_PROFILE ='profile/SET_USER_PROFILE';

let InitialState ={
  PostData: [
    {id:1,post:'hi how are you', likesCount:'12',},
    {id:2,post:'hi ',likesCount:'1',},
    {id:3,post:'syp nsjdjjs',likesCount:'10',},
    {id:4,post:'skkakskak',likesCount:'75',},
  ],
    NewPostText:'',
    profile:null,
    status:'yooo blck man',
}

const ProfileReducer = (state = InitialState, action) =>{
    switch(action.type){
    case type_AddPost:{
        let NewPost={
          id:5,
          post: state.NewPostText,
          likesCount:0,
        };
        let stateCopy={...state};
        stateCopy.PostData = [...state.PostData];
        stateCopy.PostData.push(NewPost);
        stateCopy.NewPostText = '';
        return stateCopy;
      }
    case type_UpdateNewPostText:
      let stateCopy ={...state};

        stateCopy.NewPostText = action.NewText;
        return stateCopy;
    case type_SET_USER_PROFILE:{
      return{
        ...state , profile: action.profile
      }
    }
    case type_SET_STATUS:{
      return{
        ...state , status: action.status
      }
    }
    default:
        return state;
    }    
    
}

export const addPostActionCreator = () =>{
    return{
      type:type_AddPost,
    };
}
  
   export const updateNewTextActionCreator =(text) => {
    return{
      type:type_UpdateNewPostText,
      NewText: text
    };
}  


export const setStatus =(status) =>{
  return{
    type:type_SET_STATUS,
    status
  }
}

   export const setUserProfile =(profile) => {
    return{
      type:type_SET_USER_PROFILE,
      profile

    };
}

export const getPerson = (userId = 22847) =>{return async (dispath)=>{
  let data = await ProfileAPI.ProfileGet(userId);
  
  dispath(setUserProfile(data));
  console.log('get person',data)
  
  
}}

export const getStatus = (userId) =>{return async (dispath)=>{
  let data = await ProfileAPI.ProfileStatusGet(userId)
  
  dispath(setStatus(data));
  console.log('get status',data)
  
  
}}

export const updateStatus = (state) =>{return async (dispath)=>{
  let data = await ProfileAPI.ProfileStatusPut(state)
  if(data.resultCode ===0){
    dispath(setStatus(state));
  }
  console.log('update status',data)
}}


export default ProfileReducer;