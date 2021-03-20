import {TaskActionsTypes, TaskState} from "./task.types";

const initialState: TaskState = {
    tasks: []
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
                tasks: state.tasks.filter(todo => todo.name !== action.payload)
            }
        default:
            return state;
    }
}

export default todoReducer;