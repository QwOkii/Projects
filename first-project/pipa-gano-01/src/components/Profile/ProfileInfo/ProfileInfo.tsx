import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus';
import "./ProfileInf.scss"
import photo from "../../../image/myPhoto.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../../type/state.js';
import React from 'react';
import { getPerson } from '../../../redux/profile-reducer';

const ProfileInfo = (props:any) =>{

  const {profile,status} = useSelector((u:StateType)=>u.ProfilePage)

  const dispatch = useDispatch()

  React.useEffect(()=>{
    dispatch(getPerson(Number(props.userId)))
  },[])

  if(!profile){
    return (<Preloader></Preloader>)
  }
  const photos = profile.photos.small
  return(
    <>
      <div className='Profile--container'>
        <div>
          <img src={String(!profile?photos:photo)} alt="" />
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