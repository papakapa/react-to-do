import {UserActionsType, UserState} from "./user.types";

const initialState: UserState = {
  login: '',
  todos: []
}

const userReducer = (state= initialState, action: UserActionsType) => {
  switch (action.type) {
    case "SET_USER_LOGIN":
      return {
        ...state,
        login: action.payload
      }
    case "SET_USER_TODOS":
      return {
        ...state,
        todos: action.payload
      }
    default:
      return state
  }
}

export default userReducer;
