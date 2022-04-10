

export const help_follow_un = (items,userId,objUserId,flw_status) =>{
    return items.map(friend => {
        if(friend[objUserId] === userId){
          return{...friend,...flw_status};
        }
        return friend;
          })
}