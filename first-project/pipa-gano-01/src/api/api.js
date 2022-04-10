import * as axios from 'axios';


const instans = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "bc4d1025-1019-4b7f-82ee-25df470445ba"
    },
})





export const UserAPI ={
    UserGet (currentPage =1,PageSize=10){
        return instans.get(`/users?page=${currentPage}&count=${PageSize}`)
        .then(response => {
            return response.data;
        })
    },
    UserDelete(id=2){
        return instans.delete(`/follow/${id}`)
    },
    UserPost(id=2){
        return instans.post(`/follow/${id}`)
    },
    AuthMe(){
        return instans.get(`/auth/me`)
        .then(response =>{return response.data})
    },
    AuthLoginPost(email,password,rememberMe){
        return instans.post(`/auth/login`,{email,password,rememberMe})
        .then(response =>{return response.data})
    },
    AuthLoginDelete(){
        return instans.delete(`/auth/login`)
        .then(response =>{return response.data})
    },
    
}


export const ProfileAPI={
    ProfileGet(userId){
        return instans.get(`/profile/${userId}`).then(response=>{return response.data})
    },
    ProfileStatusGet(userId){
        return instans.get(`/profile/status/${userId}`).then( response => {return response.data})
    },
    ProfileStatusPut(status){
        return instans.put(`/profile/status/`,{ status:status }).then( response => {return response.data})
    },
    
}

