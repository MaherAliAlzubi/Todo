import React from 'react'
import '../Column/Column.css';
export default function Column(props) {
    return (
        <div className='column'>
            {props.children}
        </div>
    )
}
