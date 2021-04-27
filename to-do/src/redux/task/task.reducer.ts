import {TaskActionsTypes, TaskState} from "./task.types";

const initialState: TaskState = {
    tasks: [],
    groups: ['Work', 'Study']
};

const todoReducer = (state = initialState, action: TaskActionsTypes) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks,action.payload]
            }
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(todo => todo.title !== action.payload)
            }
        case "SET_TASKS":
            return {
                ...state,
                tasks: action.payload
            }
        default:
            return state;
    }
}

export default todoReducer;