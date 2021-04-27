import styled from 'styled-components';

export const StyledAddToDoPopup = styled.div`
  position: fixed;
  left: 25%;
  top: 25%;
  bottom: 25%;
  right: 25%;
  width: 400px;
  background: white;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2000;
  border-radius: 16px;
`;

export const StyledAddInputField = styled.div`
  width: 300px;
  min-height: 50px;
`;

export const StyledAddHeader = styled.div`
  padding: 10px 0;
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid black;
`;

export const AddToDoForm = styled.form`
  margin: 16px 0;
`;

export const StyledButtonGroup = styled.div`
  width: 300px;
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
