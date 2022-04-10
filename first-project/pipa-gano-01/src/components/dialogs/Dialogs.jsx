import React from 'react';
import DialogItems from './DialigsItem/DialogsItem';
import style from './Dialogs.module.css'
import Message from './message/message';


const Dialogs = (props) =>{
    let DialogsElements =props.MessagePage.dialogData
        .map( (dialog) =><DialogItems id={dialog.id} name={dialog.name}/> );
    
    let messageElement = props.MessagePage.messageData
        .map( (messages) => <Message message={messages.message}/>);

    let newMessageElement = React.createRef();

    let addMes = () =>{
        props.AddMess()
    }
    let onMessText = () =>{
        let text = newMessageElement.current.value;
        props.updateNewMessText(text);
    }
    return(
        <div className ={style.dialogs}>
            <div className={style.dialogs__items}>
                {DialogsElements}
            </div>
            <div>
                <div className={style.messages}>
                    {messageElement}
                    <div className={style.Dialog__Create}>
                        <textarea onChange={onMessText} className={style.Create__text} ref={newMessageElement} autoFocus cols="50" rows="1"></textarea>
                        <button  className={style.Create__button} onClick={addMes}>send</button>
                    </div>
               </div>
            </div>
        </div>
    );
}

export default Dialogs;