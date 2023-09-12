import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../redux/actions";
import { selectTaskData } from "../redux/selector";

import ListItem from "@mui/material/ListItem";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import "./TaskList.css";

const TaskList = () => {
  const { tasks } = useSelector(selectTaskData);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleEdit = (task) => {
    dispatch(editTodo(task));
  };

  return (
    <div className="task-list">
      <div className="display-task">
        <ul className="tasks">
          {tasks &&
            tasks?.map((task) => (
              <li className="task" key={task.id} style={{ listStyle: "none" }}>
                <ListItem>
                  <CheckCircleIcon
                    className="Check_icon"
                    style={{ color: "#7209b7" }}
                  />
                </ListItem>
                {task.text}
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
                <button className="delete-btn" onClick={() => handleEdit(task)}>
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
