import React, {useCallback, useState} from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getGroups } from '../../redux/task/task.selector';
import { setShouldShowPopup } from '../../redux/popup/popup.actions';
import { getUserLogin } from '../../redux/user/user.selector';
import { IToDo } from '../../core/interfaces/IToDo';
import DatePicker from 'react-datepicker';
import {
  AddToDoForm,
  StyledAddHeader,
  StyledAddInputField,
  StyledAddToDoPopup,
  StyledButtonGroup,
} from './StyledToDoPopup';
import moment from "moment";
import { addTodoToUser } from '../../redux/user/user.actions';

const AddToDoPopup = () => {
  const dispatch = useDispatch();
  const groups = useSelector(getGroups);
  const userLogin = useSelector(getUserLogin);
  const [startDate, setStartDate] = useState<any>(null);
  const {register, handleSubmit} = useForm<IToDo>();

  const rerenderGroups = useCallback(() => {
    return groups.map((el) => <option value={el}>{el}</option>)
  }, [groups]);

  const onCancel = () => dispatch(setShouldShowPopup(false));

  const onAdd = (data: IToDo) => {
    const date = startDate ? moment(startDate).format() : 'noTime';
    dispatch(addTodoToUser(userLogin, {...data, completed: false, time: date}));
  }

  const filterTime = (time: any) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() <= selectedDate.getTime();
  };

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
          <StyledAddInputField>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} filterDate={filterTime}/>
          </StyledAddInputField>
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
