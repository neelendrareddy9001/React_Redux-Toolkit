import {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Actions';

const Task = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    function addNewTask() {
        const task = inputRef.current.value.trim();
        if(task !== ""){
            dispatch(addTodo(task));
            inputRef.current.value = " ";
        }
    }

    return (
        <div className='task-component'>
            <div className='add-task'>
                <input
                    type='text'
                    placeholder='Add task her....'
                    ref={inputRef}
                    className='taskInput'
                />
                <button onClick={addNewTask}>Add Task</button>
            </div>
        </div>
    )
}

export default Task;