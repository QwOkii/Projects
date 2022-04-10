import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { compose } from 'redux';
import { AddMessageActionCreator, UpdateNewMessageTextActionCreator } from '../../redux/Dialogs-reducer';
import authNavigation from '../HOC/authRedirect';
import Dialogs from './Dialogs';





let mapStateToProps = (state) =>{
    return{
        MessagePage: state.MessagePage,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewMessText: (text) => {
            let action = UpdateNewMessageTextActionCreator(text);
            dispatch(action)},
        AddMess: () => {
            let action = AddMessageActionCreator();
            dispatch(action);
        },
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    authNavigation
)(Dialogs);