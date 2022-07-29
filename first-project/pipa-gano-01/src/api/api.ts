import axios from 'axios';
import { ProfileType, UserData } from '../type/state';


const instans = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "bc4d1025-1019-4b7f-82ee-25df470445ba"
    },
})

type UserGetType={
    eror:null|string
    items:Array<UserData>
    totalCount:number
}
type UserDelete_Post={
    resultCode: number
    messages: Array<string>
    data: {}
}
type Authme={
    resultCode: number
    messages: Array<string>
    data: {
      id: number
      email: string
      login: string
    }
}
type AuthLogin={
    resultCode: number
    messages: Array<string>
    data: {
      userId: number
    }
}
type defaultRes={
    resultCode: number
    messages: Array<string>
    data: {}
}
type GetCaptchaUrl={
    url:string|null
}

export const UserAPI ={
    UserGet (currentPage:number,PageSize=10){
        return instans.get<UserGetType>(`/users?page=${currentPage}&count=${PageSize}`)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
    },
    UserDelete(id=2){
        return instans.delete<UserDelete_Post>(`/follow/${id}`)
    },
    UserPost(id=2){
        return instans.post<UserDelete_Post>(`/follow/${id}`)
    },
    AuthMe(){
        return instans.get<Authme>(`/auth/me`)
        .then(response =>{return response.data})
    },
    AuthLoginPost(email:string,password:string,captcha:string|null =null ,rememberMe:boolean =false){
        return instans.post<AuthLogin>(`/auth/login`,{email,password,rememberMe,captcha})
        .then(response =>{return response.data})
    },
    AuthLoginDelete(){
        return instans.delete<defaultRes>(`/auth/login`)
        .then(response =>{return response.data})
    },
    GetCaptchaUrl(){
        console.log('pislo')
        return instans.get<GetCaptchaUrl>(`/security/get-captcha-url`)
        .then(response =>{return response.data})
    },
    
}


export const ProfileAPI={
    ProfileGet(userId:number){
        return instans.get<ProfileType>(`/profile/${userId}`).then(response=>{return response.data})
    },
    ProfileStatusGet(userId:number){
        return instans.get(`/profile/status/${userId}`).then( response => {return response.data})
    },
    ProfileStatusPut(status:string){
        return instans.put<defaultRes>(`/profile/status/`,{ status}).then( response => {return response.data})
    },
    
}

