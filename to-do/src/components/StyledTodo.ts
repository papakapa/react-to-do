import styled from 'styled-components';

export const StyledTodo = styled.div`
  color: black;
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  margin: 10px 0;
`;

export const StyledToDoButton = styled.span`
  cursor: pointer;
`;

export const StyledTodoInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TodoLabel = styled.label`
  margin-left: 8px;
`;