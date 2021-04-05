import { IToDo } from "../../core/interfaces/IToDo";

export const SET_USER_LOGIN = 'SET_USER_LOGIN';
export const SET_USER_TODOS = 'SET_USER_TODOS';

interface SET_USER_LOG {
  type: typeof SET_USER_LOGIN;
  payload: string;
}

interface SET_USER_TODO {
  type: typeof SET_USER_TODOS;
  payload: IToDo[];
}

export interface UserState {
  login: string;
  todos: IToDo[]
}

export type UserActionsType = SET_USER_LOG | SET_USER_TODO ;
