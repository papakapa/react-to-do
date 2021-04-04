import {SET_USER_LOGIN, SET_USER_TODOS, UserActionsType} from './user.types';
import {IToDo} from '../../core/interfaces/IToDo';

export const setUserLogin = (login: string): UserActionsType => ({type: SET_USER_LOGIN, payload: login});
export const setUserTodos = (todos: IToDo[]): UserActionsType => ({type: SET_USER_TODOS, payload: todos});

