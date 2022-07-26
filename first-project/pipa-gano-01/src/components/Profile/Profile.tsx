
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './myPosts/MyPosts';



const Profile = (props:any) =>{
  return(
        <div className='Profile'>
        <ProfileInfo profile ={props.profile} status ={props.status} updateStatus ={props.updateStatus}/>
        <MyPosts/>
      </div>
    );
}
export default Profile;