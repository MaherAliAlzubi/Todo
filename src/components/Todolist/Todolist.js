import React from 'react'
import '../Todolist/Todolist.css';
import Todocard from '../Todocard/Todocard.js';
export default function Todolist(props) {
    return (
        <div className='todolist'>
            <h1 className='title'>Todo List</h1>
            <hr className='divider' />
            <div className='cards'>
                {props.tasks.map((task) => {
                    return (<Todocard
                        key={task.id}
                        data={task.data}
                        isChecked={task.isChecked}
                        id={task.id}
                        changeTaskState={props.changeTaskState}
                        removeTask={props.removeTask}
                    />);
                })}
            </div>
        </div>
    )
}
