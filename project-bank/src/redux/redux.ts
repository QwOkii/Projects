import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import BlankReducer from "./Blank-reducer";

let reduser =combineReducers({
    data:BlankReducer
});

export type ReducerType = ReturnType<typeof reduser>

let store = createStore(reduser,applyMiddleware(thunk));

export default store;