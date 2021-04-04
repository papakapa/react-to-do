import React, {useCallback} from 'react';
import { useSelector } from 'react-redux';
import {StyledTodoList} from './StyledTodoList';
import ToDo from "./ToDo";
import {getUserTodos} from "../redux/user/user.selector";

const ToDoList = () => {
  const todoArr = useSelector(getUserTodos);

  const rerenderTodos = useCallback(() => {
    if (todoArr.length !== 0) {
      return todoArr.map((todo, index) => <ToDo name={todo.title}/>);
    }
    return null;
  }, [todoArr]);

  return (
    <StyledTodoList>
      {rerenderTodos()}
    </StyledTodoList>
  );
};

export default ToDoList;
