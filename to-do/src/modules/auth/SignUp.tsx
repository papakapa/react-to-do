import React from 'react';
import { useForm } from 'react-hook-form';
import { SignUpForm } from './StyledSignUpForm';

const SignUp = () => {

  const {register, handleSubmit} = useForm();

  const onSignUp = (data: any) => console.log(data);

  return (
    <SignUpForm onSubmit={handleSubmit(onSignUp)}>
      <input type='text' name='firstName' ref={register} placeholder='First name'/>
      <input type='text' name='secondName' ref={register} placeholder='Second name'/>
      <input type='text' name='login' ref={register} placeholder='Login'/>
      <input type='password' name='password' ref={register} placeholder='Password'/>
      <input type='password' name='validPassword' ref={register} placeholder='Valid your password'/>
      <button type='submit'>SignUp</button>
    </SignUpForm>
  )
};

export default SignUp;
