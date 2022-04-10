import { connect } from "react-redux";
import { Follow ,  unFollow ,getUsersThunkCreator } from '../../redux/friends-reducer';
import Friend from './Friends';
import React from 'react';
import PreLoader from "../common/Preloader/Preloader";
import { UserAPI } from "../../api/api";
import { compose } from "redux";
import authNavigation from "../HOC/authRedirect";
import { getCurrentPage, getFollowingInProgres, getIsFetching, getPageSize, getTotalUsersCount, getUserReselector } from "../../redux/reselector-Friends";


class FriendsContainer extends React.Component{

    
    componentDidMount(){
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.PageSize)
        // this.props.setIsFetching(true);
        // UserAPI.UserGet(this.props.currentPage,this.props.PageSize).then(data =>{
        //         this.props.setIsFetching(false);
        //         this.props. (data.items);
        //         this.props. (data.totalCount);
        //     })
    }
    
    onPageChanged=(number) =>{
        this.props.getUsersThunkCreator(number,this.props.PageSize)
    }
    render( ){
        
        return<>
            {this.props.isFetching ? 
            <PreLoader/>
            :null}
            <Friend
                totalUsersCount={this.props.totalUsersCount}
                PageSize={this.props.PageSize}
                currentPage ={this.props.currentPage}
                UserData={this.props.UserData}
                unFollow={this.props.unFollow}
                Follow={this.props.Follow}
                onPageChanged={this.onPageChanged}
                
            />
        </>
    }
};



let mapStateToProps = (state) =>{
    return{
        //UserData: getUserData(state),
        UserData: getUserReselector(state),
        PageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgres: getFollowingInProgres(state),
     }
}
// let mapDispatchToProps = (dispatch) =>{
//     return{
//         Follow: Follow,
//         unFollow:unFollow ,
//          :   ,
//          :  ,
//          :  ,
//         setIsFetching:setIsFetching 
//     }
// }


export default compose(
    connect(mapStateToProps,{Follow ,unFollow ,getUsersThunkCreator}),
    authNavigation
)(FriendsContainer)
