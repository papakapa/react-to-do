import React from 'react';
import {Redirect, Route } from 'react-router-dom';
import AuthPage from '../../pages/auth/AuthPage';
import {AuthStages} from "../enums/auth-stages.enum";
import HomePage from "../../pages/home/HomePage";
import SignUp from '../../modules/auth/SignUp';

const useRoutes = (isAuth: string) => {
  return (
    <>
      {isAuth === AuthStages.AUTHORIZED && <Route path='/home' component={HomePage}/>}
      {isAuth === AuthStages.NOT_AUTHORIZED && <Route path='/auth' exact component={AuthPage}/>}
      {isAuth === AuthStages.NOT_AUTHORIZED && <Route path='/auth/reg' component={SignUp}/>}
      {isAuth === AuthStages.AUTHORIZED && <Redirect to='/home'/>}
      {isAuth === AuthStages.NOT_AUTHORIZED && <Redirect to='/auth'/>}
    </>
  );
}

export { useRoutes };