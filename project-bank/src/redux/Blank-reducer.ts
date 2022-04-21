import { ActionType, StateType, initialAction } from './../types/types';


const initialState:StateType={
    blank:[],
    lenght:null,
    Sblank:{
        id:0,
        name:'',
        count:0,
        rate:0,
        term:0,
        
    },mode:false
}


const BlankReducer =(state=initialState,action:initialAction)=>{
    switch(action.type){
        case ActionType.SET_BLANK:{
            state.blank.push(action.blank)
            return{
                ...state,
                lenght:true
                

            }
        }
        case ActionType.DELETE_BLANK:{
            let DeleteState = state.blank.splice(action.id,1)
            console.log('delete ',DeleteState)
            return{
                ...state
            }
        }
        case ActionType.EDIT_BLANK:{
            let s={}
            state.blank.forEach(u =>{
                if(u.id===action.id){
                    s=u
                }

            })
            
            console.log(state.Sblank)
            return{
                ...state,
                Sblank:s,
                mode:true
            }
        }
        default:
        return state
            
    }
}

export default BlankReducer

