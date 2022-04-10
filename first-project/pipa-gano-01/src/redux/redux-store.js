import {applyMiddleware, combineReducers, createStore} from 'redux';
import authReducer from './auth-reducer';
import DialogsReducer from './Dialogs-reducer';
import FriendsReducer from './friends-reducer';
import NewsReducer from './News-reducer';
import ProfileReducer from './profile-reducer';
import ThunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    MessagePage: DialogsReducer,
    newsPage : NewsReducer,
    UserPage:FriendsReducer,
    auth:authReducer,
});
let store = createStore(reducers,applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;