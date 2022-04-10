import React from 'react';
import Header from './header';
import './Header.css';
import { connect } from 'react-redux';
import { SetUserData,AuthMeUpdate, logout } from '../../redux/auth-reducer';

class HeaderContainer extends React.PureComponent{
  
  componentDidMount(){
    this.props.AuthMeUpdate()
  }
  
  render(){
    console.log(this.props)
    return<Header
    {...this.props}
    logout ={this.props.logout}
    />
  }
}
const mapStateToProps = (state) =>({
  isAuth: state.auth.isAuth,
  login : state.auth.login,

})

export default connect (mapStateToProps,{SetUserData,AuthMeUpdate,logout})(HeaderContainer);