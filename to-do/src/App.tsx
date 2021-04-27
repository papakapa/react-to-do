import React, { useEffect } from 'react';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import {useDispatch, useSelector} from "react-redux";
import { getTodoFromDB } from "./redux/task/task.actions";
import {validateToken} from "./redux/auth/auth.actions";
import {getIsAuth} from "./redux/auth/auth.selector";
import {useRoutes} from "./core/routes/routes";
import {getUserLogin} from "./redux/user/user.selector";
import {ToastContainer} from "react-toastify";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const userLogin = useSelector(getUserLogin);
  const routes = useRoutes(isAuth);

  useEffect(() => {
    dispatch(validateToken());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTodoFromDB(userLogin));
  }, [userLogin,dispatch]);

  return (
    <div className="App">
      {routes}
      <ToastContainer />
    </div>
  );
}

export default App;
