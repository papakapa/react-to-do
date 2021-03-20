import {IToDo} from '../../core/interfaces/IToDo';
import {ADD_TASK, DELETE_TASK, TaskActionsTypes} from "./task.types";

export const addTodo = (todo: IToDo): TaskActionsTypes => ({type: ADD_TASK, payload: todo});
export const deleteTodo = (name: string): TaskActionsTypes => ({type: DELETE_TASK, payload: name});
