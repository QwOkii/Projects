import Preloader from '../../common/Preloader/Preloader.jsx'
import './ProfileInfo.css'
import ProfileStatus from './ProfileStatus.jsx';

const ProfileInfo = (props) =>{

  if(!props.profile){
    return (<Preloader></Preloader>)
  }
  console.log(props.profile,'profile');
  return(
    <div className="info">
      <div className='about'>
        <div className='wreapper__content__iteam-avatar'>
          <img src={props.profile.photos.large} alt="" />
        </div>
        <div>
          <div>{props.profile.fullName}</div>
          <ProfileStatus status={props.status} updateStatus ={props.updateStatus} />
        </div>
      </div>
    </div>
  );
  }

  export default ProfileInfo;