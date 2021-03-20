import React, {useRef} from 'react';
import { StyledToDoGenerator } from './StyledToDoGenerator';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/task/task.actions';

const ToDoGenerator = () => {
    const todoRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const onToDoCreate = (event: React.KeyboardEvent) => {
        const todoName = todoRef.current!.value;
        if (event.key === 'Enter') {
            todoName !== '' && dispatch(addTodo({name: todoName}));
        }
    };

    return (
        <StyledToDoGenerator className='input-field'>
            <input
                ref={todoRef}
                type='text'
                id='title'
                placeholder='Придумайте имя задания'
                onKeyPress={onToDoCreate}
                autoComplete='off'
            />
            <label htmlFor='title' className='active'>
                Придумайте имя задания
            </label>
        </StyledToDoGenerator>
    )
};

export default ToDoGenerator;
