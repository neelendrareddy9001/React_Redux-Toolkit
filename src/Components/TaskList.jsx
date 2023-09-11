import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo,editTodo } from "../redux/actions";
import { selectTaskData } from "../redux/selector";

const TaskList = () => {
    const {tasks} = useSelector(selectTaskData);

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };
    const handleEdit = (task) => {
        dispatch(editTodo(task));
    };

    return (
        <div className='tasklist'>
            <div className='display-task'>
                <h3>your tasks:</h3>
                <ul className='tasks'>
                    {tasks && tasks?.map((task) => (
                        <li className='task' key={task.id}>
                            {task.text}
                            <button 
                                className='delete-btn'
                                onClick={() => handleDelete(task.id)}
                            >
                                Delete
                            </button>
                            <button 
                                className='delete-btn'
                                onClick={() => handleEdit(task)}
                            >
                                Edit
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskList;

