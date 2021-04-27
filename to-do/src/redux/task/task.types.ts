import {IToDo} from '../../core/interfaces/IToDo';

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SET_TASKS = "SET_TASKS";

interface ADD_TODO {
    type: typeof ADD_TASK;
    payload: IToDo;
}

interface DELETE_TODO {
    type: typeof DELETE_TASK;
    payload: string;
}

interface SET_TODOS {
    type: typeof SET_TASKS;
    payload: IToDo[];
}

export interface TaskState {
    tasks: IToDo[];
    groups: string[];
}

export type TaskActionsTypes = ADD_TODO | DELETE_TODO | SET_TODOS;
