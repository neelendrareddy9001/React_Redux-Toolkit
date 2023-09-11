import { createAction } from "@reduxjs/toolkit"
// export const addTodo = (text) => {
//     return {
//         type: "ADD_TASK",
//         payload: {
//             id: new Date().getTime(),
//             text: text,
//         },
//     };
// };


export const addTodo = createAction('tasks/addTodo');
export const deleteTodo = createAction('tasks/deleteTodo');
export const editTodo = createAction('tasks/editTodo')
export const inputChange = createAction('tasks/inputChange')


// export const deleteTodo = (id) => {
//     return {
//         type: "DELETE_TASK",
//         payload: id,
//     }
// }