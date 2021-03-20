import React, {useCallback} from 'react';
import { useSelector } from 'react-redux';
import {getAllTodos} from "../redux/task/task.selector";
import {StyledTodoList} from './StyledTodoList';
import ToDo from "./ToDo";

const ToDoList = () => {
  const todoArr = useSelector(getAllTodos);

  const rerenderTodos = useCallback(() => {
    if (todoArr.length !== 0) {
      return todoArr.map((todo, index) => <ToDo name={todo.name}/>);
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
