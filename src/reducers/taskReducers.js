import rootReducer from ".";

const initialState = {
    tasks: []
};

const taskReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                takss: [...state.tasks, action.payload]
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state;
    }
};

export default rootReducer;
