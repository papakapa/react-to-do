import { IToDo } from '../../core/interfaces/IToDo';
import { ADD_TASK, DELETE_TASK, SET_TASKS, TaskActionsTypes } from "./task.types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import axios from "axios";
import { setShouldShowPopup } from "../popup/popup.actions";

export const addTodo = (todo: IToDo): TaskActionsTypes => ({type: ADD_TASK, payload: todo});

export const addTodoToDB = (todo: IToDo): ThunkAction<any, RootState, any, any> => async dispatch => {
    await axios.post('http://localhost:1234/todo/create',{todo: todo});
    dispatch(addTodo(todo));
    dispatch(setShouldShowPopup(false));
};

export const deleteTodo = (name: string): TaskActionsTypes => ({type: DELETE_TASK, payload: name});

export const setTodos = (todos: IToDo[]): TaskActionsTypes => ({type: SET_TASKS, payload: todos});

export const getTodoFromDB = (): ThunkAction<any, RootState, any, any> => async dispatch => {
    const res = await axios.get('http://localhost:1234/todo/all');
    res.data && dispatch(setTodos(res.data));
};
