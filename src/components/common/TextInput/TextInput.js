import React from 'react'
import '../TextInput/TextInput.css';

export default function TextInput(props) {
    return (
            <input placeholder='What needs to be done?' className='textInput' onChange={props.onTextChange} value={props.value}/>
    )
}
