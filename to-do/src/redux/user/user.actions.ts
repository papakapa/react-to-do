import axios from 'axios';
import {toast} from "react-toastify";
import { ThunkAction } from 'redux-thunk';
import {IToDo} from '../../core/interfaces/IToDo';
import { setShouldShowPopup } from '../popup/popup.actions';
import {SET_USER_LOGIN, SET_USER_TODOS, UserActionsType} from './user.types';

export const setUserLogin = (login: string): UserActionsType => ({type: SET_USER_LOGIN, payload: login});
export const setUserTodos = (todos: IToDo[]): UserActionsType => ({type: SET_USER_TODOS, payload: todos});

export const addTodoToUser = (login: string, todo: IToDo): ThunkAction<any, any, any, any> => async dispatch => {
  const res = await axios.post('http://localhost:1234/todo/createForUser', {login: login, todo: todo});
  if (res.data) {
    toast.success('Todo created');
    if (res.data.todos && res.data.todos.length) {
      dispatch(setUserTodos([...res.data.todos, todo]));
    }
    else {
      dispatch(setUserTodos([todo]));
    }
    dispatch(setShouldShowPopup(false));
  }
  else {
    toast.error('Something going wrong');
  }
};

export const deleteUserTodo = (login: string, todo: string): ThunkAction<any, any, any, any> => async dispatch => {
  const res = await axios.post('http://localhost:1234/todo/deleteUserTodo', {login: login, todo: todo});
  if (res.data) {
    toast.success('Todo deleted');
    dispatch(setUserTodos(res.data.todos));
  }
  else {
    toast.error('Something going wrong');
  }
};

export const completeUserTodo = (login: string, todo: string): ThunkAction<any, any, any, any> => async dispatch => {
  const res = await axios.post('http://localhost:1234/todo/complete', {login: login, todo: todo});
  if (res.data) {
    toast.success('Todo completed');
    dispatch(setUserTodos(res.data.todos));
  }
  else {
    toast.error('Something going wrong');
  }
}
