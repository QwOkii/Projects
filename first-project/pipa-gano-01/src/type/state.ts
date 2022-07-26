

export type InitialTypeUser={
    PageSize:number,
    UserData:Array<UserData> ,
    currentPage:number,
    totalUsersCount:number
    followingInProgres:boolean|undefined,
    isFetching: boolean,
}

export type UserData={
    followed:boolean,
    id:number,
    name:string,
    photos:{ small:null|string,large:null|string},
    status:null|string,


}

export type InitialTypeAuth={
    email: string|null|undefined,
    id:number|null|undefined,
    isAuth:boolean|null|undefined,
    login:string|null|undefined
}

export type InitialTypeProfile ={
    NewPostText:string,
    PostData: Array<PostData>,
    profile:ProfileType| null
    status:string| null|undefined
}

export type PostData ={
    id:number|undefined|null,
    post:string|undefined|null
}

export type ProfileType={
    aboutMe:null|string
    contacts:contactsType
    fullName:string
    lookingForAJob:boolean
    lookingForAJobDescription:any
    photos:{}
    userId:number
}

type contactsType ={
    facebook:null|string
    github:null|string
    instagram:null|string
    mainLink:null|string
    twitter:null|string
    vk:null|string
    website:null|string
    youtube:null|string
}

type photosType={
    small: null|string
    large: null|string
}

export type InitialTypeMessage ={
    NewMessageText:string,
    dialogData:Array<dialogData>,
    messageData:Array<messageData>
}

export type dialogData={
    id:number|undefined,
    name:string|undefined,
}

export type messageData={
    id:number|undefined,
    message:string
}

export type StateType={
    UserPage:InitialTypeUser,
    auth:InitialTypeAuth,
    ProfilePage:InitialTypeProfile,
    MessagePage:InitialTypeMessage,

}