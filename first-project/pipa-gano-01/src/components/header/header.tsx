import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink} from 'react-router-dom';
import { AuthMeUpdate, logout } from '../../redux/auth-reducer';
import { StateType } from '../../type/state';
import './Header.scss';

const Header = () =>{
  const {login,isAuth}=useSelector((u:StateType)=>u.auth)
  

  useEffect(()=>{
    AuthMeUpdate()
  },[])
  
    return(
        <header className='wreapper__header'>
        <div className='login-block'>
          {isAuth ? 
            <Name  login ={login} logout={logout}/> :
            <NavLink to={'/login/'}>Login</NavLink>}
        </div>
      </header>
    );
}

const Name = (props:any) =>{
  const dispathc =useDispatch()
  
  return <>
    <div className="header__name">{props.login}</div> <div className="header--btn" onClick={()=>dispathc(props.logout())}><p>logout</p></div>
  </>
}

export default Header;