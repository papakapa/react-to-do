import React, {useRef} from 'react';
import {useForm} from 'react-hook-form';
import {SignUpForm} from './StyledSignUpForm';
import {IUserToCreate} from '../../core/interfaces/IUser';
import {useDispatch} from "react-redux";
import {signUp} from "../../redux/auth/auth.actions";

const SignUp = () => {
  const dispatch = useDispatch();
  const {register, handleSubmit, watch} = useForm<IUserToCreate>();

  const password = useRef({});
  password.current = watch("password", "");

  const onSignUp = (data: IUserToCreate) => dispatch(signUp(data));

  return (
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
      <button type='submit'>SignUp</button>
    </SignUpForm>
  )
};

export default SignUp;
