import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { updateStatus } from "../../../redux/profile-reducer";

const ProfileStatus = (props:any) =>{

    const dispatch = useDispatch()
    
    let [editMode ,setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status);
    },[props.status])

    const activateMode = () =>{
        setEditMode(true);
    };
    const deactivateMode = () =>{
        setEditMode(false);
        dispatch( updateStatus(status))
    };

    const onChangeStatus =(e:any)=>{
        setStatus(e.currentTarget.value)
        console.log(e)
    }

    
    return(
        <>
            {!editMode &&
            <div className="Profile__info--status" onDoubleClick={activateMode}>
                {props.status}
            </div>
            }
            {editMode &&
            <div >
                <input onChange={onChangeStatus} autoFocus={true} onBlur={deactivateMode} value={status}  />
            </div>}
        </>
    ) 
}

export default ProfileStatus;