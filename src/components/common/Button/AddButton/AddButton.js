import React from 'react'
import '../AddButton/AddButton.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
export default function AddButton(props) {
    return (
        <div className='addButton' onClick={props.onAdd}>
                <AddCircleOutlineIcon className='circleIcon'/>
                <p className='addButtonText'>Add</p>
        </div>
    )
}
