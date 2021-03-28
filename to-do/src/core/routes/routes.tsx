import React from 'react';
import {Redirect, Route } from 'react-router-dom';
import AuthPage from '../../pages/auth/AuthPage';
import {AuthStages} from "../enums/auth-stages.enum";
import HomePage from "../../pages/home/HomePage";

const useRoutes = (isAuth: string) => {
  return (
    <>
      {isAuth === AuthStages.AUTHORIZED && <Route path='/home' component={HomePage}/>}
      {isAuth === AuthStages.NOT_AUTHORIZED && <Route path='/auth' component={AuthPage}/>}
      {isAuth === AuthStages.AUTHORIZED && <Redirect to='/home'/>}
      {isAuth === AuthStages.NOT_AUTHORIZED && <Redirect to='/auth'/>}
    </>
  );
}

export { useRoutes };