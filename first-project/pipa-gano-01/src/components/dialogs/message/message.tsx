import  './message.scss'

const Message = (props:any) =>{
    return(
        <div className='message'>
            {props.message}
            
        </div>
    );
}

export default Message;