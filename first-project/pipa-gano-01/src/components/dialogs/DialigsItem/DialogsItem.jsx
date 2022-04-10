import { NavLink } from 'react-router-dom';
import a from './DialogsItem.module.css'

const DialogItems = (props) =>{
    let path = '/Dialogs/' + props.id
    return(
        <div className={a.item }>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItems;