import {RootState} from "../index";
import {UserState} from "./user.types";

const getUserState = (state: RootState): UserState => state.user;

export const getUserLogin = (state: RootState) => getUserState(state).login;
export const getUserTodos = (state: RootState) => getUserState(state).todos;
