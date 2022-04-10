import photo from '../../image/UserPht.png';
import style from './Friends.module.css';
import { NavLink} from 'react-router-dom';
import Pagenator from './Pagenator';


let Friend =(props) =>{
    
    return(
            
        <div>
            
            <Pagenator PageSize ={props.PageSize} totalUsersCount ={props.totalUsersCount} onPageChanged={props.onPageChanged} currentPage={props.currentPage}/>
            { props.UserData.map( u => <div key={u.id}> 
                <span>
                    <div>
                        <NavLink to={ '/Profile/' + u.id}>
                            <img src={u.photos.small !=null ? u.photos.small :photo} className={style.UserPhoto} alt=""/> 
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                         <button disabled={props.followingInProgres} onClick={() =>{
                             props.unFollow(u.id)
                            }}>unFollow</button>

                        :<button disabled={props.followingInProgres} onClick={() =>{
                            props.Follow(u.id)
                            }}>Follow</button> }
                        
                    </div>
                </span>
                <span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>  
                    </span>
                    <span>
                        <div>"u.location.country"</div>
                        <div>"u.location.city"</div>
                    </span>
                </span>
            </div>)}
        
        </div>
    );
}

export default Friend;