import style from './Friends.module.css'

let Friends = (props) =>{


    return(
        <div>
            {props.UserData.map( u => <div key={u.id}> 
                <span>
                    <div>
                        <img src={u.photoURL} className={style.UserPhoto} alt="" /> 
                    </div>
                    <div>
                        {u.followed ?
                        <button onClick={ () =>{props.unfollow(u.id)}}>unFollow</button>
                        :<button onClick={() =>{props.follow(u.id)}}>Follow</button> }
                        
                    </div>
                </span>
                <span>
                    <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>  
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        
        </div>
    );
}

export default Friends;