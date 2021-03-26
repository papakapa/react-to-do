import React, { useEffect } from 'react';
import './App.scss';
import ToDoGenerator from './components/ToDoGenerator';
import ToDoList from './components/ToDoList';
import Popup from './components/popup/Popup';
import { useDispatch } from "react-redux";
import { getTodoFromDB } from "./redux/task/task.actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoFromDB());
  }, []);

  return (
    <div className="App">
      <div className='App__wrapper'>
        <h1>Todos</h1>
        <ToDoGenerator />
        <ToDoList />
        <Popup />
      </div>
    </div>
  );
}

export default App;
