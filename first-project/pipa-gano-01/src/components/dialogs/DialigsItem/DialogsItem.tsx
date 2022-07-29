import React from 'react';
import { NavLink } from 'react-router-dom';
import './DialogsItem.scss'
import photo from '../../../image/VectorUser.svg';

const DialogItems:React.FC<{name?:string,id?:number}> = (props) =>{
    let path = '/Dialogs/' + props.id
    return(
        <>
            <NavLink to={path} className='list__item'>
            <img src={photo} alt="" />
                {props.name}
                </NavLink>
        </>
    );
}

export default DialogItems;