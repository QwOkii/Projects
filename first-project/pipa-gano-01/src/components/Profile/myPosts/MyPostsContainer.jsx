
import { addPostActionCreator, updateNewTextActionCreator } from '../../../redux/profile-reducer';
import './MyPosts.css'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) =>{
  return{
    ProfilePage: state.ProfilePage
  }
}
let mapDispatchToProps = (dispatch) =>{
  return{
      updateNewPostText: (text) => {
        let action = updateNewTextActionCreator(text);
        dispatch(action)
      },
      AddPost: () => {
        let action = addPostActionCreator();
        dispatch(action);
      },
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;