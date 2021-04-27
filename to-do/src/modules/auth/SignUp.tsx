import React, {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {SignUpForm} from './StyledSignUpForm';
import {IUserToCreate} from '../../core/interfaces/IUser';
import {useDispatch} from "react-redux";
import {signUp} from "../../redux/auth/auth.actions";
import {StyledLogButton} from './StyledSignInForm';
import { Redirect } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  const [isCreated, setIsCreated] = useState(false);
  const {register, handleSubmit, watch} = useForm<IUserToCreate>();

  const password = useRef({});
  password.current = watch("password", "");

  const onSignUp = (data: IUserToCreate) => {
    console.log('start');
    dispatch(signUp(data, setIsCreated));
  };

  return (
    <>
      {isCreated && <Redirect to='/auth'/>}
      <SignUpForm onSubmit={handleSubmit(onSignUp)}>
        <input
          type='text'
          name='login'
          ref={register({required: true})}
          placeholder='Login'
          autoComplete='off'
        />
        <input
          type='password'
          name='password'
          ref={register({required: true})}
          placeholder='Password'
          autoComplete='off'
        />
        <input
          type='password'
          name='validPassword'
          ref={register({
            required: true,
            validate: value => value === password.current
          })}
          placeholder='Valid your password'
          autoComplete='off'
        />
        <StyledLogButton type='submit'>SignUp</StyledLogButton>
      </SignUpForm>
    </>
  )
};

export default SignUp;
