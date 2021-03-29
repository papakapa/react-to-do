import React from 'react';
import { useForm } from 'react-hook-form';
import { IUserToSignIn } from '../../core/interfaces/IUser';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/auth.actions';

const AuthPage = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<IUserToSignIn>();

  const onSignIn = (data: IUserToSignIn) => {
    dispatch(signIn(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSignIn)}>
      <input
        type='text'
        name='login'
        ref={register({required: true})}
        placeholder='login'
      />
      <input
        type='password'
        name='password'
        ref={register({required: true})}
        placeholder='password'
      />
        <button type='submit'>SignIn</button>
      </form>
    </div>
  )
};

export default AuthPage;
