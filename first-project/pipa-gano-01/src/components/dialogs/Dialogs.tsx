import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddMessageActionCreator, getNameAC, UpdateNewMessageTextActionCreator } from '../../redux/Dialogs-reducer';
import { StateType } from '../../type/state';
import DialogItems from './DialigsItem/DialogsItem';
import  './Dialogs.scss'
import Message from './message/message';
import photo from '../../image/VectorUser.svg';


const Dialogs = () =>{
    const dispatch =useDispatch()
    const {dialogData,messageData}= useSelector((u:StateType)=>u.MessagePage)
    const login =useSelector((u:StateType)=>u.auth.login)
    let newMessageElement = React.useRef<HTMLTextAreaElement>(null);

    let addMes = () =>{
        dispatch( AddMessageActionCreator())
    }
    let onMessText = () =>{
        dispatch(getNameAC(login))
        let text = newMessageElement.current?.value;
        dispatch( UpdateNewMessageTextActionCreator(text))
    }
    return(
        <div className='Dialog-content'>
            <div className="Dialog__header">
                <img src={photo} alt="UserPHT" />
                <span>User Name</span> 
            </div>
            <div className="Dialog__main">
                <div className="list">
                    {dialogData.map( (dialog) =><div  key={dialog.id}><DialogItems id={dialog.id} name={dialog.name}/></div> )}
                </div>
                <div className="massenger">
                    <div className="massenger__items">
                        {messageData.map( (messages) =><div className="massenger__item"  key={messages.id}><Message photo={messages.photo} name={messages.name}  message={messages.message}/></div>)}
                    </div>
                    <div className='massenger--typing'>
                        <div className="massenger__input">
                            <textarea onChange={onMessText} ref={newMessageElement} autoFocus></textarea>
                            
                            <div className="massenger__buttons">
                                <button style={{borderTopRightRadius:4}}  className='massenger__button' onClick={addMes}>send</button>
                                <button style={{borderBottomRightRadius:4}} className='massenger__button' onClick={()=>alert("hey")}>...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
        // <div className ='dialogs'>
        //     <div className='dialogs__items'>
        //         
        //     </div>
        //     <div>
        //         <div className='messages'>
        //
        //             <div className='Dialog__Create'>
        //                 
        //             </div>
        //        </div>
        //     </div>
        // </div>

}

export default Dialogs;