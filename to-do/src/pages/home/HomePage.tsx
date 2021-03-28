import React from 'react';
import {HomeWrapper} from './StyledHome';
import ToDoGenerator from '../../components/ToDoGenerator';
import ToDoList from '../../components/ToDoList';
import Popup from '../../components/popup/Popup';

const HomePage = () => {
  return (
    <HomeWrapper>
      <h1>Todos</h1>
      <ToDoGenerator />
      <ToDoList />
      <Popup />
    </HomeWrapper>
  )
};

export default HomePage;
