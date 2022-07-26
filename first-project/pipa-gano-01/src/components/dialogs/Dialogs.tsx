import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddMessageActionCreator, UpdateNewMessageTextActionCreator } from '../../redux/Dialogs-reducer';
import { StateType } from '../../type/state';
import DialogItems from './DialigsItem/DialogsItem';
import  './Dialogs.scss'
import Message from './message/message';


const Dialogs = () =>{
    const dispatch =useDispatch()

    const {dialogData,messageData,NewMessageText}= useSelector((u:StateType)=>u.MessagePage)

    let DialogsElements =dialogData
        .map( (dialog) =><DialogItems id={dialog.id} name={dialog.name}/> 
    );
    
    let messageElement = messageData
        .map( (messages) => <Message message={messages.message}/>
    );

    let newMessageElement = React.useRef<HTMLTextAreaElement>(null);

    let addMes = () =>{
        dispatch( AddMessageActionCreator())
    }
    let onMessText = () =>{
        let text = newMessageElement.current?.value;
        dispatch( UpdateNewMessageTextActionCreator(text))
    }
    return(
        <div className ='dialogs'>
            <div className='dialogs__items'>
                {DialogsElements}
            </div>
            <div>
                <div className='messages'>
                    {messageElement}
                    <div className='Dialog__Create'>
                        <textarea onChange={onMessText} className='Create__text' ref={newMessageElement} autoFocus></textarea>
                        <button  className='Create__button' onClick={addMes}>send</button>
                    </div>
               </div>
            </div>
        </div>
    );
}

export default Dialogs;