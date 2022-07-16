
import React, { useEffect } from 'react';
import photo from '../../image/person.svg';
import './Friends.scss';
import { NavLink} from 'react-router-dom';
import Pagenator from './Pagenator';
import { useDispatch, useSelector } from 'react-redux';
import { InitialTypeUser, StateType } from '../../type/state';
import { Follow, getUsersThunkCreator, unFollow } from '../../redux/friends-reducer';


let Friend =(props:InitialTypeUser) =>{
    
    const {currentPage,PageSize,followingInProgres,UserData}= useSelector((u:StateType)=>u.UserPage)
    
    
    const dispatch =useDispatch();

    useEffect(()=>{dispatch(getUsersThunkCreator(currentPage,PageSize)); },[])
    return(
            
        <div>
            
            <Pagenator/>
            { UserData.map( u => <div key={u.id} className="User"> 
                    <div>
                        <NavLink className="User-link" to={ '/Profile/' + u.id}>
                            <img style={{color:"aqua"}} src={u.photos.small !=null ? u.photos.small :photo}  alt=""/> 
                        </NavLink>
                        <div>
                            {u.followed ?
                            <button className='User-unFollow' disabled={followingInProgres} onClick={() =>{
                                dispatch(unFollow(u.id));
                                }}>unFollow</button>

                                :<button className='User-Follow' disabled={followingInProgres} onClick={() =>{
                                dispatch(Follow(u.id));
                            }}>Follow</button> }
                        
                        </div>
                    </div>
                    <div>
                        <div>{u.name}</div>
                        <div style={{fontSize:16}}>{u.status}</div>
                    </div>
            </div>)}
            <Pagenator/>
        
        </div>
    );
}

export default Friend;