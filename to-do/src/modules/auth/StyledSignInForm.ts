import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin-top: 50px;
  margin-bottom: 10px;
  
  & input  {
    margin: 16px 0;
  }
  
  padding: 16px 32px;
  
  border: 1px solid black;
`;