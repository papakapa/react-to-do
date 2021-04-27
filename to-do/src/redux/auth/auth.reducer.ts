import {AuthActionTypes, AuthState} from "./auth.types";
import {AuthStages} from "../../core/enums/auth-stages.enum";

const initialState: AuthState = {
  isAuth: AuthStages.PENDING
};

const authReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case "SET_IS_AUTH_USER":
      return {
        ...state,
        isAuth: action.payload
      }
    default:
      return state
  }
};

export default authReducer;
