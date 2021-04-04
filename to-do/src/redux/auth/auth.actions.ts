import {ThunkAction} from 'redux-thunk';
import axios from 'axios';
import {RootState} from '../index';
import {AuthActionTypes, SET_IS_AUTH_USER} from './auth.types';
import {AuthStages} from '../../core/enums/auth-stages.enum';
import {IUserToCreate, IUserToSignIn} from '../../core/interfaces/IUser';
import {setUserLogin, setUserTodos} from "../user/user.actions";

export const setIsAuth = (isAuth: string): AuthActionTypes => ({type: SET_IS_AUTH_USER, payload: isAuth});

export const validateToken = (): ThunkAction<any, RootState, any, any> => async dispatch => {
  dispatch(setIsAuth(AuthStages.PENDING));
  const token = localStorage.getItem('token');
  if (!token) {
    dispatch(setIsAuth(AuthStages.NOT_AUTHORIZED));
  } else {
    const res = await axios.get('http://localhost:1234/auth/isAuth', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (res.data) {
      dispatch(setUserLogin(res.data.login));
      dispatch(setIsAuth(AuthStages.AUTHORIZED));
    } else {
      dispatch(setUserLogin(''));
      dispatch(setIsAuth(AuthStages.NOT_AUTHORIZED));
    }
  }
};

export const signIn = (user: IUserToSignIn): ThunkAction<any, RootState, any, any> => async dispatch => {
  const res = await axios.post('http://localhost:1234/auth/login', user);
  if (res.data) {
    dispatch(setUserLogin(res.data.login));
    localStorage.setItem('token', res.data.access_token);
    dispatch(setIsAuth(AuthStages.AUTHORIZED));
  }
};

export const signUp = (user: IUserToCreate): ThunkAction<any, any, any, any> => async () => {
  const res = await axios.post('http://localhost:1234/auth/signUp', { user : {
      login: user.login,
      password: user.password
    }});
  console.log(res.data);
};

export const signOut = ():ThunkAction<any, any, any, any> => async dispatch => {
  localStorage.removeItem('token');
  dispatch(setIsAuth(AuthStages.NOT_AUTHORIZED));
  dispatch(setUserTodos([]));
};
