import ProfileReducer, { addPostActionCreator } from "./profile-reducer";






test('addpost', () => {
    let action = addPostActionCreator('PENIS');
    let state ={
        PostData: [
          {id:1,post:'hi how are you', likesCount:'12',},
          {id:2,post:'hi ',likesCount:'1',},
          {id:3,post:'syp nigga',likesCount:'10',},
          {id:4,post:'why do you like sock dick',likesCount:'75',},
    ]}
    ProfileReducer(state,action);
});