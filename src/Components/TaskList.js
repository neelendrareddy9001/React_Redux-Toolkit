import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../Actions";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div className='tasklist'>
            <div className='display-task'>
                <h3>your tasks:</h3>
                <ul className='tasks'>
                    {tasks.map((task) => (
                        <li className='task' key={task.id}>
                            {task.text}
                            <button 
                                className='delete-btn'
                                onClick={() => handleDelete(task.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskList;

