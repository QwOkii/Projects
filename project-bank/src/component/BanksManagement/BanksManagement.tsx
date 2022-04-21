import React, { useState } from "react";
import './BanksManegment.css';
import { Blank, StateType,} from "../../types/types";
import { Field, Form, Formik} from "formik";
import { useTypeSelector } from "../../hook/useTypeSelector";
import { useDispatch } from "react-redux";
import { setBlnakAC,deleteBlankAC,editBlankAC } from "../../redux/action-creator/blank";


const BanksManegment: React.FC<Blank>= (props)=>{
    const state:StateType = useTypeSelector(state=> state.data)
    console.log(state)
    const dispatch = useDispatch()
    let [id,setID]= useState(0)
    

    return(
        <div className="flex">
            <div>
                {state.blank.map((u:any)=>
                <div className="container-list" key={u.id}>
                    {u.name}
                    <button 
                    onClick={()=>{dispatch(editBlankAC(u.id))
                    console.log(state.blank.map(u =>{return u.id === state.Sblank.id}))}
                    
                    } >edit</button> <button onClick={()=>{dispatch(deleteBlankAC(u.id))}}>delete</button>
                    {
                    (state.mode && state.blank.map(u =>{return u.id === state.Sblank.id})) ? <div><form>
                        
                        <input type="text" value={state.Sblank.name}/>
                        <input type="text" value={state.Sblank.count}/>
                        <input type="text" value={state.Sblank.rate}/>
                        <input type="text" value={state.Sblank.term}/>
                        <button>save</button>
                        </form></div>:null}
                </div>)}
                
            </div>
            <div className="container">
            
            <Formik
            initialValues={{name:'',rate:1,count:0,term:0}}
            validate={values =>{

            }}
            onSubmit={
                (value)=>{
                    let {count,name,rate,term}=value
                    setID(id+1)
                    dispatch(setBlnakAC({id,name,count,rate,term}))
                }
            }
            
            >
            <Form>
                <Field  name={'name'} placeholder={'назва банку'}></Field>
                <Field name={'rate'} placeholder={'Відсоткова ставка'}></Field>
                <label htmlFor="count"> до н2</label>
                <Field name={'count'} placeholder={'сума іпотеки'}></Field>
                <Field name={'term'} placeholder={'Строк кредиту'}></Field>
                <button type="submit">Send</button>
            </Form>
                
            </Formik>
        </div>
        </div>
        
    );
}

export default BanksManegment;