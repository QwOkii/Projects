import React from 'react';
import {useDispatch, useSelector}from 'react-redux'
import { getUsersThunkCreator } from '../../redux/friends-reducer';
import { StateType } from '../../type/state';
import  './Friends.scss';




let Pagenator =() =>{

    let currentPage = useSelector((u:StateType)=>u.UserPage.currentPage);
    let PageSize = useSelector((u:StateType)=>u.UserPage.PageSize);
    let totalUsersCount = useSelector((u:StateType)=>u.UserPage.totalUsersCount);

    let PageCount = Math.ceil(totalUsersCount / PageSize);
    const dispatch =useDispatch();

    return(
            
        <div>
            <React.Fragment></React.Fragment>
            
            <div className='Paginator'>
                <button className="Paginator-itm" disabled={currentPage===1} onClick={()=>{dispatch(getUsersThunkCreator((currentPage-1),PageSize))}}>Preview</button>
                <button className="Paginator-itm" disabled>{ currentPage}</button>
                <button className="Paginator-itm" disabled={currentPage === PageCount} onClick={()=>{dispatch(getUsersThunkCreator((currentPage+1),PageSize)) }}>Next</button>
            </div>
        </div>
    );
}

export default Pagenator;