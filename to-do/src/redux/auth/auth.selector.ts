import {RootState} from "../index";
import {AuthState} from "./auth.types";

const getAuthState = (state: RootState): AuthState => state.auth;

const getIsAuth = (state: RootState) => getAuthState(state).isAuth;

export { getIsAuth };
