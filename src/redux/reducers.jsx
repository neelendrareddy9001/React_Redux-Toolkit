import { createReducer } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, editTodo, inputChange } from './actions';

const data = [
  { id: 1, text: 'some string1' },
  { id: 2, text: 'some string2' },
  { id: 3, text: 'some string3' },
];

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || data,
  taskValue: '',
  isEdit: false,
  editedId: null,
};

const taskReducers = createReducer(initialState, (tasks) => {
  tasks.addCase(inputChange, (state, { payload }) => {
    state.taskValue = payload;
  });
  tasks.addCase(addTodo, (state, { payload }) => {
    state.tasks = payload;

    state.isEdit = false;
    if (state.editedId) {
      state.editedId = null;
    }
  });
  tasks.addCase(deleteTodo, (state, { payload }) => {
    console.log(payload, 'payload');
    const newData = state.tasks.filter((task) => task.id !== payload);
    state.tasks = newData;
    localStorage.setItem('tasks',JSON.stringify(newData))
  });
  tasks.addCase(editTodo, (state, { payload }) => {
    console.log(payload, 'payload');
    state.isEdit = true;
    state.taskValue = payload.text;
    state.editedId = payload.id;
  });
});

export default taskReducers;
