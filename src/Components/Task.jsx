import { useDispatch, useSelector } from "react-redux";
import { addTodo, inputChange } from "../redux/actions";
import { selectTaskData } from "../redux/selector";

import "./Task.css";

const Task = () => {
  const dispatch = useDispatch();
  let { taskValue, tasks, isEdit, editedId } = useSelector(selectTaskData);

  const addNewTask = () => {
    if (!isEdit) {
      const task = { id: tasks.length + 1, text: taskValue.trim() };
      const newTasks = [...tasks, task];
      if (task !== "") {
        dispatch(addTodo(newTasks));
        dispatch(inputChange(""));
        localStorage.setItem("tasks", JSON.stringify(newTasks));
      }
    } else {
      const tempTasks = tasks.map((task) => {
        if (task.id === editedId) {
          return { id: editedId, text: taskValue };
        } else {
          return task;
        }
      });
      if (taskValue !== "") {
        dispatch(addTodo(tempTasks));
        localStorage.setItem("tasks", JSON.stringify(tempTasks));
        dispatch(inputChange(""));
      }
    }
  };

  const handleChange = (e) => {
    let payload = e.target.value;
    dispatch(inputChange(payload));
  };

  return (
    <div className="taskc_omponent">
      <div className="add_task">
        <input
          type="text"
          placeholder="Add task her...."
          value={taskValue}
          onChange={handleChange}
          className="taskInput"
        />
        <button onClick={addNewTask}>
          {" "}
          {isEdit ? "Edit Task" : "Add Task"}
        </button>
      </div>
    </div>
  );
};

export default Task;
