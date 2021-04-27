import React from 'react';
import { StyledGeneratorIcon, StyledGeneratorTitle, StyledToDoGenerator } from './StyledToDoGenerator';
import {useDispatch} from 'react-redux';
import { setShouldShowPopup } from "../redux/popup/popup.actions";

const ToDoGenerator = () => {
    const dispatch = useDispatch();

    const onAddTask = () => dispatch(setShouldShowPopup(true));

    return (
       <StyledToDoGenerator>
          <StyledGeneratorIcon className="material-icons" onClick={onAddTask}>add_box</StyledGeneratorIcon>
          <StyledGeneratorTitle>Add task </StyledGeneratorTitle>
       </StyledToDoGenerator>
    )
};

export default ToDoGenerator;
