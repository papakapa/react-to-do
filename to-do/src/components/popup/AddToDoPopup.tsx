import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getGroups } from '../../redux/task/task.selector';
import { setShouldShowPopup } from '../../redux/popup/popup.actions';
import { getUserLogin } from '../../redux/user/user.selector';
import { IToDo } from '../../core/interfaces/IToDo';
import {
  AddToDoForm,
  StyledAddHeader,
  StyledAddInputField,
  StyledAddToDoPopup,
  StyledButtonGroup,
} from './StyledToDoPopup';
import { addTodoToUser } from '../../redux/user/user.actions';

const AddToDoPopup = () => {
  const dispatch = useDispatch();
  const groups = useSelector(getGroups);
  const userLogin = useSelector(getUserLogin);

  const {register, handleSubmit} = useForm<IToDo>();

  const rerenderGroups = useCallback(() => {
    return groups.map((el) => <option value={el}>{el}</option>)
  }, [groups]);

  const onCancel = () => dispatch(setShouldShowPopup(false));

  const onAdd = (data: IToDo) => dispatch(addTodoToUser(userLogin, {...data, completed: false}));

  return (
    <StyledAddToDoPopup>
      <StyledAddHeader>Add task</StyledAddHeader>
      <AddToDoForm onSubmit={handleSubmit(onAdd)}>
        <StyledAddInputField>
          <input
            ref={register({required: true})}
            type='text'
            name='title'
            placeholder='Come up with a name for the job'
            autoComplete='off'
          />
          {/*{errors.title && 'Task title is required'}*/}
        </StyledAddInputField>
        <StyledAddInputField>
          <select ref={register} name='group'>
            <option value="" disabled selected>Choose your option</option>
            {rerenderGroups()}
          </select>
        </StyledAddInputField>
        <StyledButtonGroup>
          <button type='button' onClick={onCancel}>Cancel</button>
          <button type='submit'>Create task</button>
        </StyledButtonGroup>
      </AddToDoForm>
    </StyledAddToDoPopup>
  );
};

export default AddToDoPopup;
