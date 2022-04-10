import './myPosts/MyPosts.css';
import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile, getPerson, getStatus,updateStatus } from '../../redux/profile-reducer';
import { Navigate, useMatch } from 'react-router-dom';
import authNavigation from '../HOC/authRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component{
 
  componentDidMount(){
    //let userId = this.props.match.params.userId
    this.props.getStatus(22847)
    this.props.getPerson(22847);
  }

 
  render(){
    return(
      
      <Profile
      {...this.props}
      profile ={this.props.profile}
      status ={this.props.status}
      updateStatus ={this.props.updateStatus}
      />
    );
  }
}





let mapStateToProps = (state) =>({
  profile :state.ProfilePage.profile, 
  status: state.ProfilePage.status,
});

export default compose( 
  connect (mapStateToProps,{setUserProfile,getPerson,getStatus,updateStatus}),
)(ProfileContainer);