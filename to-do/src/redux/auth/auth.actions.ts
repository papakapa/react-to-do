import {ThunkAction} from 'redux-thunk';
import axios from 'axios';
import {RootState} from '../index';
import {AuthActionTypes, SET_IS_AUTH_USER} from './auth.types';
import {AuthStages} from '../../core/enums/auth-stages.enum';
import { IUserToSignIn } from '../../core/interfaces/IUser';

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
    res.data && dispatch(setIsAuth(AuthStages.AUTHORIZED));
    !res.data && dispatch(setIsAuth(AuthStages.NOT_AUTHORIZED));
  }
};

export const signIn = (user: IUserToSignIn): ThunkAction<any, RootState, any, any> => async dispatch => {
  const res = await axios.post('http://localhost:1234/auth/login', user);
  if (res.data) {
    localStorage.setItem('token', res.data.access_token);
    dispatch(setIsAuth(AuthStages.AUTHORIZED));
  }
};

