import React, { useEffect } from 'react';
import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import { getTodoFromDB } from "./redux/task/task.actions";
import {validateToken} from "./redux/auth/auth.actions";
import {getIsAuth} from "./redux/auth/auth.selector";
import {useRoutes} from "./core/routes/routes";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const routes = useRoutes(isAuth);

  useEffect(() => {
    dispatch(validateToken());
  }, []);

  useEffect(() => {
    dispatch(getTodoFromDB());
  }, []);

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
