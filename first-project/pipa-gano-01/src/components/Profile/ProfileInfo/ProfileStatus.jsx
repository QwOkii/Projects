import React, { useEffect, useState } from "react"

const ProfileStatus = (props) =>{
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
        props.updateStatus(status)
    };

    const onChangeStatus =(e)=>{
        setStatus(e.currentTarget.value)
        console.log(e)
    }

    
    return(
        <>
            {!editMode &&
            <div onDoubleClick={activateMode}>
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