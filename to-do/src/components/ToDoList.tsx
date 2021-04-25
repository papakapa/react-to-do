import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {StyledCompletedTitle, StyledTodoList, StyledTodoLists} from './StyledTodoList';
import ToDo from "./ToDo";
import {getUserLogin, getUserTodos} from '../redux/user/user.selector';

const ToDoList = () => {
  const todoArr = useSelector(getUserTodos);
  const userLogin = useSelector(getUserLogin);

  const rerenderTodos = useCallback(() => {
    if (todoArr.length !== 0) {
      const result = todoArr.filter(el => !el.completed);
      return result.map((todo) => <ToDo name={todo.title} userLogin={userLogin} completed={false}/>);
    }
    return null;
  }, [todoArr, userLogin]);

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
      <StyledTodoList>
        <StyledCompletedTitle>Completed Tasks</StyledCompletedTitle>
        {rerenderCompleted()}
      </StyledTodoList>
    </StyledTodoLists>
  );
};

export default ToDoList;
