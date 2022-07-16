export type InitialTypeUser={
    PageSize:number,
    UserData:Array<UserData>,
    currentPage:number,
    totalUsersCount:number
    followingInProgres:boolean|undefined,
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
    profile:null|undefined,//потім добавиш шо це
    status:string| null|undefined
}

export type PostData ={
    id:number|undefined|null,
    post:string|undefined|null,
    likeCount:number|undefined|null
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