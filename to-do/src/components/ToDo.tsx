import React from 'react';
import { StyledTodo, StyledToDoButton } from './StyledTodo';
import {useDispatch} from "react-redux";
import { deleteUserTodo } from '../redux/user/user.actions';

interface ToDoComponent {
  name: string;
  userLogin: string;
}

const ToDo: React.FC<ToDoComponent> = ({name, userLogin}) => {
  const dispatch = useDispatch();
    const onDeleteToDo = () => {
        dispatch(deleteUserTodo(userLogin, name));
    }

    return (
        <StyledTodo>
            <p>{name}</p>
          <StyledToDoButton className="material-icons" onClick={onDeleteToDo}>delete</StyledToDoButton>
        </StyledTodo>
    );
};

export default ToDo;
