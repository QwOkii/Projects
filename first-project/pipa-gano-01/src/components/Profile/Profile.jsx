import './myPosts/MyPosts.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './myPosts/MyPostsContainer';



const Profile = (props) =>{
  return(
        <div className='wreapper__content' >
        <ProfileInfo profile ={props.profile} status ={props.status} updateStatus ={props.updateStatus}/>
        <MyPostsContainer store={props.store}/>
        
      </div>
    );
}
export default Profile;