export const SET_IS_AUTH_USER = 'SET_IS_AUTH_USER';

interface SET_IS_AUTH {
  type: typeof SET_IS_AUTH_USER;
  payload: string;
}

export interface AuthState {
  isAuth: string
}

export type AuthActionTypes = SET_IS_AUTH;
