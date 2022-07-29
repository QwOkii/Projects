import  './message.scss'
import photo from '../../../image/VectorUser.svg';

const Message = (props:{name:string|null,message?:string,photo?:string}) =>{
    return(
        <>  
        <div className='item__info'>
            <img src={(props.photo!==undefined)?props.photo:photo} alt="" />
            <div className='fz20'>
                {props.name}
            </div>
        </div>
        <div className='item__mess'>
            {props.message}
        </div>
        
        </>
    );
}

export default Message;