import { NavLink} from 'react-router-dom';
import s from'./Nav.module.css';
import React from 'react';

const Nav = () =>{
    return(
        <nav className={s.wreapper__nav}> 
        <div className={s.Nav__iteam}>
          <NavLink to='/Profile/2' className={ NavData => NavData.isActive ? s.active : s.item}>Profile</NavLink>
        </div>
        <div className={s.Nav__iteam}>
          <NavLink to="/Dialogs"className={ NavData => NavData.isActive ? s.active : s.item}>Message</NavLink>
        </div>
        <div className={s.Nav__iteam}>
          <NavLink to="/" className={ NavData => NavData.isActive ? s.active : s.item}>News</NavLink>
        </div>
        <div className={s.Nav__iteam} >
          <NavLink to="/Friends" className={ NavData => NavData.isActive ? s.active : s.item}>Friends</NavLink>
        </div>
        <div className={s.Nav__iteam}>
          <NavLink to="/Music" className={ NavData => NavData.isActive ? s.active : s.item}>Music</NavLink>
        </div>
        <div className={s.Nav__iteam} >
          <NavLink to="/Setting" className={ NavData => NavData.isActive ? s.active : s.item}>Setting</NavLink>
        </div>
      </nav>
    );
}

export default Nav;