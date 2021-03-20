import React from 'react';
import { StyledTodo, StyledToDoButton } from './StyledTodo';
import {useDispatch} from "react-redux";
import {deleteTodo} from "../redux/task/task.actions";

interface ToDoComponent {
  name: string;
}

const ToDo: React.FC<ToDoComponent> = ({name}) => {
  const dispatch = useDispatch();
    const onDeleteToDo = () => {
        dispatch(deleteTodo(name));
    }

    return (
        <StyledTodo>
            <p>{name}</p>
          <StyledToDoButton className="material-icons" onClick={onDeleteToDo}>delete</StyledToDoButton>
        </StyledTodo>
    );
};

export default ToDo;
