import { NavLink } from 'react-router-dom';
import './DialogsItem.scss'

const DialogItems = (props:{name?:string,id?:number}) =>{
    let path = '/Dialogs/' + props.id
    return(
        <div className='item '>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItems;