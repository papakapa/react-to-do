import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {StyledCompletedTitle, StyledTodoList, StyledTodoLists} from './StyledTodoList';
import ToDo from "./ToDo";
import moment from "moment";
import {getUserLogin, getUserTodos} from '../redux/user/user.selector';

const ToDoList = () => {
  const todoArr = useSelector(getUserTodos);
  const userLogin = useSelector(getUserLogin);

  const link = window.location.href.split('/');
  const contentType = link[link.length - 1];

  const rerenderTodos = useCallback(() => {
    console.log('rerender');
    if (todoArr.length !== 0) {
      if (contentType === 'home') {
        const result = todoArr.filter(el => !el.completed);
        return result.map((todo) => <ToDo name={todo.title} userLogin={userLogin} completed={false}/>);
      }
      if (contentType === 'overdue') {
        const result = todoArr.filter(el => {
          return !el.completed && el.time !== 'noTime' && moment(el.time).isBefore(moment(), 'day');
        });
        return result.map((todo) => <ToDo name={todo.title} userLogin={userLogin} completed={false}/>);
      }
      if (contentType === 'limit') {
        const result = todoArr.filter(el => !el.completed && el.time === 'noTime');
        return result.map((todo) => <ToDo name={todo.title} userLogin={userLogin} completed={false}/>);
      }
      if (contentType === 'today') {
        const result = todoArr.filter(el => {
          return !el.completed && el.time !== 'noTime' && moment(el.time).isSame(moment(), 'day');
        });
        return result.map((todo) => <ToDo name={todo.title} userLogin={userLogin} completed={false}/>);
      }
      if (contentType === 'tomorrow') {
        const result = todoArr.filter(el => {
          return !el.completed && el.time !== 'noTime' && moment(el.time).isSame(moment().add(1,'days'), 'day');
        });
        return result.map((todo) => <ToDo name={todo.title} userLogin={userLogin} completed={false}/>);
      }
      const filteredTodos = todoArr.filter(el => !el.completed && el.group === contentType);
      return filteredTodos.map((todo) => <ToDo name={todo.title} userLogin={userLogin} completed={false}/>);
    }
    return null;
  }, [todoArr, userLogin, contentType]);

  const rerenderCompleted = useCallback(() => {
    if (todoArr.length !== 0) {
      const result = todoArr.filter(el => el.completed);
       if (result.length) {
         return result.map((todo) => <ToDo name={todo.title} userLogin={userLogin} completed={true}/>);
       }
       return null;
    }
    return null;
  }, [todoArr, userLogin]);

  return (
    <StyledTodoLists>
      <StyledTodoList>
        {rerenderTodos()}
      </StyledTodoList>
      {contentType === 'home' && <StyledTodoList>
        <StyledCompletedTitle>Completed Tasks</StyledCompletedTitle>
        {rerenderCompleted()}
      </StyledTodoList>}
    </StyledTodoLists>
  );
};

export default ToDoList;
