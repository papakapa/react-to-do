import React from 'react';
import {ContentWrapper, HomeLayout, HomeWrapper} from './StyledHome';
import ToDoGenerator from '../../components/ToDoGenerator';
import ToDoList from '../../components/ToDoList';
import Popup from '../../components/popup/Popup';
import Header from './Header';
import SideMenu from "./SideMenu";

const HomePage = () => {
  return (
    <HomeWrapper>
      <Header/>
      <HomeLayout>
        <SideMenu />
        <ContentWrapper>
          <h1>Todos</h1>
          <ToDoGenerator/>
          <ToDoList/>
          <Popup/>
        </ContentWrapper>
      </HomeLayout>
    </HomeWrapper>
  )
};

export default HomePage;
