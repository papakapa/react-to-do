import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { IUserToSignIn } from '../../core/interfaces/IUser';
import { signIn } from '../../redux/auth/auth.actions';
import { LoginForm } from './StyledSignInForm';
import { NavLink } from 'react-router-dom';

const SignInForm  = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<IUserToSignIn>();

  const onSignIn = (data: IUserToSignIn) => {
    dispatch(signIn(data));
  };

  return (
    <LoginForm onSubmit={handleSubmit(onSignIn)}>
      <input
        type='text'
        name='login'
        ref={register({required: true})}
        placeholder='login'
      />
      <NavLink to='/auth/reg'>Not Have Account?</NavLink>
      <input
        type='password'
        name='password'
        ref={register({required: true})}
        placeholder='password'
      />
      <button type='submit'>SignIn</button>
    </LoginForm>
  );
};

export default SignInForm;
