import { createSelector } from 'reselect';

const getUserData =(state)=>{
    return state.UserPage.UserData;
};
export const getPageSize =(state)=>{
    return state.UserPage.PageSize;
};
export const getTotalUsersCount =(state)=>{
    return state.UserPage.totalUsersCount;
};
export const getCurrentPage =(state)=>{
    return state.UserPage.currentPage;
};
export const getIsFetching =(state)=>{
    return state.UserPage.isFetching;
};
export const getFollowingInProgres=(state)=>{
    return state.UserPage.followingInProgres;
};

export const getUserReselector = createSelector(getUserData,(users) =>{
    
    return users.filter( u => true);
});