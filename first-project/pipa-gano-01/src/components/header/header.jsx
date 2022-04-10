import { NavLink} from 'react-router-dom';
import './Header.css';

const Header = (props) =>{
    return(
        <header className='wreapper__header'>
        <div className='login-block'>
          {props.isAuth ? 
            <Name login ={props.login} logout={props.logout}/> :
            <NavLink to={'/login/'}>Login</NavLink>}
        </div>
      </header>
    );
}

const Name = (props) =>{
  console.log(props)
  return <div className="">
    {props.login} <button onClick={()=>props.logout}>logout</button>
  </div>
}

export default Header;