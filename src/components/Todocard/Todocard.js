import React from 'react'
import RemoveButton from '../common/Button/RemoveButton/RemoveButton';
import Checkbox from '../common/Checkbox/Checkbox';
import Row from '../common/Row/Row';
import '../Todocard/Todocard.css';
export default function Todocard(props) {
    return (
        <div className='todocard'>
            <div className='cardRow'>
                <Row>
                    <Checkbox changeTaskState={props.changeTaskState} id={props.id}/>
                        {props.isChecked ? <strike>{props.data}</strike> : <p>{props.data}</p>}
                </Row>
                <RemoveButton removeTask={props.removeTask} id={props.id}/>
            </div>
            {!props.lastChild && <hr />}
        </div>
    )
}
