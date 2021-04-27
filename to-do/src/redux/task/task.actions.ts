import { IToDo } from '../../core/interfaces/IToDo';
import { ADD_TASK, DELETE_TASK, SET_TASKS, TaskActionsTypes } from "./task.types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import axios from "axios";
import { setShouldShowPopup } from "../popup/popup.actions";
import {setUserTodos} from "../user/user.actions";

export const addTodo = (todo: IToDo): TaskActionsTypes => ({type: ADD_TASK, payload: todo});

export const addTodoToDB = (todo: IToDo): ThunkAction<any, RootState, any, any> => async dispatch => {
    await axios.post('http://localhost:1234/todo/create',{todo: todo});
    dispatch(addTodo(todo));
    dispatch(setShouldShowPopup(false));
};

export const deleteTodo = (name: string): TaskActionsTypes => ({type: DELETE_TASK, payload: name});

export const setTodos = (todos: IToDo[]): TaskActionsTypes => ({type: SET_TASKS, payload: todos});

export const getTodoFromDB = (login: string): ThunkAction<any, RootState, any, any> => async dispatch => {
    if (login) {
        const res = await axios.post('http://localhost:1234/todo/userTodos', {login : login});
        res.data && dispatch(setUserTodos(res.data));
    }
};
