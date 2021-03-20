import {RootState} from "../index";
import {TaskState} from "./task.types";

const getToDoState = (state: RootState): TaskState => state.todos;

const getAllTodos = (state: RootState) => getToDoState(state).tasks;

export { getAllTodos };
