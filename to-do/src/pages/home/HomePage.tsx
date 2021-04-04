import React from 'react';
import {ContentWrapper, HomeWrapper} from './StyledHome';
import ToDoGenerator from '../../components/ToDoGenerator';
import ToDoList from '../../components/ToDoList';
import Popup from '../../components/popup/Popup';
import Header from './Header';

const HomePage = () => {
  return (
    <HomeWrapper>
      <Header />
      <ContentWrapper>
        <h1>Todos</h1>
        <ToDoGenerator/>
        <ToDoList/>
        <Popup/>
      </ContentWrapper>
    </HomeWrapper>
  )
};

export default HomePage;
