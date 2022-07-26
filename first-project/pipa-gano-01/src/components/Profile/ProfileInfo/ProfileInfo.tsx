import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus';
import "./ProfileInf.scss"
import photo from "../../../image/myPhoto.jpg"
import { useSelector } from 'react-redux';
import { StateType } from '../../../type/state.js';

const ProfileInfo = (props:any) =>{
  const {profile,status} = useSelector((u:StateType)=>u.ProfilePage)

  if(!profile){
    return (<Preloader></Preloader>)
  }
  return(
    <>
      <div className='Profile--container'>
        <div>
          <img src={photo} alt="" />
        </div>
        <div className='Profile__info'>
          <div className='fz20'>{profile.fullName}</div>
          <ProfileStatus status={status}/>
        </div>
      </div>
    </>
  );
  }

  export default ProfileInfo;