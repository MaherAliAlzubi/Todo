import React from 'react'
import '../RemoveButton/RemoveButton.css';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

export default function RemoveButton(props) {
    return (
        <div className='removeButton' onClick={()=>{props.removeTask(props.id)}}>
            <DeleteOutlineOutlinedIcon  className='removeIcon'/>
        </div>
    )
}
