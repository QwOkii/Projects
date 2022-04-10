import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"



let mapStateToPropsNavigate = (state) =>({
    isAuth:state.auth.isAuth})
  
const authNavigation =(Component) =>{
    
    

    class isAuthComponent extends React.Component{

        onSubmit =(Formdaat)=>{
            console.log(Formdaat)
        }
        render(){
            if(!this.props.isAuth){return(<Navigate to={'/Login'}/>)}
            return <Component onSubmits={this.onSubmit} {...this.props}/> 
        }
    }
    

    
    
    let NavigateComponnent =connect(mapStateToPropsNavigate)(isAuthComponent)
    return NavigateComponnent;
}


export default authNavigation