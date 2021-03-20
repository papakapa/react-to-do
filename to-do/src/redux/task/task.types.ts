import {IToDo} from '../../core/interfaces/IToDo';

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK"

interface ADD_TODO {
    type: typeof ADD_TASK;
    payload: IToDo;
}

interface DELETE_TODO {
    type: typeof DELETE_TASK;
    payload: string;
}

export interface TaskState {
    tasks: IToDo[];
}

export type TaskActionsTypes = ADD_TODO | DELETE_TODO;
