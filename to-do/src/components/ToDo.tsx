import React from 'react';
import {StyledTodo, StyledToDoButton, StyledTodoInfo, TodoLabel} from './StyledTodo';
import {useDispatch} from "react-redux";
import {completeUserTodo, deleteUserTodo} from '../redux/user/user.actions';

interface ToDoComponent {
  name: string;
  userLogin: string;
  completed: boolean;
}

const ToDo: React.FC<ToDoComponent> = ({name, userLogin, completed}) => {
  const dispatch = useDispatch();
  const onDeleteToDo = () => {
    dispatch(deleteUserTodo(userLogin, name));
  }

  const onComplete = () => {
    dispatch(completeUserTodo(userLogin, name));
  }
  return (
    <StyledTodo>
      <StyledTodoInfo>
        <input
          type='checkbox'
          name='completed'
          checked={completed}
          onChange={onComplete}
          disabled={completed}
        />
        <TodoLabel htmlFor='completed'>{name}</TodoLabel>
      </StyledTodoInfo>
      <StyledToDoButton className="material-icons" onClick={onDeleteToDo}>delete</StyledToDoButton>
    </StyledTodo>
  );
};

export default ToDo;
