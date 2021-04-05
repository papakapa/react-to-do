import React, {useCallback} from 'react';
import { useSelector } from 'react-redux';
import {StyledTodoList} from './StyledTodoList';
import ToDo from "./ToDo";
import { getUserLogin, getUserTodos } from '../redux/user/user.selector';

const ToDoList = () => {
  const todoArr = useSelector(getUserTodos);
  const userLogin = useSelector(getUserLogin);

  const rerenderTodos = useCallback(() => {
    if (todoArr.length !== 0) {
      return todoArr.map((todo) => <ToDo name={todo.title} userLogin={userLogin}/>);
    }
    return null;
  }, [todoArr, userLogin]);

  return (
    <StyledTodoList>
      {rerenderTodos()}
    </StyledTodoList>
  );
};

export default ToDoList;
