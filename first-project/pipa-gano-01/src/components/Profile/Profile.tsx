
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './myPosts/MyPosts';
import { useParams } from 'react-router-dom';



const Profile = (props:any) =>{

  let {userId} = useParams()

  return(
        <div className='Profile'>
        <ProfileInfo userId={userId} />
        <MyPosts/>
      </div>
    );
}
export default Profile;