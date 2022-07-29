import React from 'react';
import  './Friends.scss';


type PaginatorType={
    currentPage:number
    PageSize:number
    totalUsersCount:number
    getUsersThunkCreator(currentPage:number,PageSize:number):void
}

let Pagenator:React.FC<PaginatorType> =({PageSize,currentPage,totalUsersCount,getUsersThunkCreator}) =>{


    let PageCount = Math.ceil(totalUsersCount / PageSize);

    return(
            
        <div>
            <React.Fragment></React.Fragment>
            
            <div className='Paginator'>
                <button className='Paginator-itm' disabled={currentPage===1} onClick={()=>{getUsersThunkCreator((currentPage-1),PageSize)}}>Preview</button>
                <button className="Paginator-itm" disabled>{ currentPage}</button>
                <button className="Paginator-itm" disabled={currentPage === PageCount} onClick={()=>{getUsersThunkCreator((currentPage+1),PageSize) }}>Next</button>
            </div>
        </div>
    );
}

export default Pagenator;