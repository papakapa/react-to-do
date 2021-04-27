import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin-top: 50px;
  margin-bottom: 10px;
  
  & input  {
    width: 400px;
    font-size: 22px;
    font-weight: normal;
    border: 0;
    border-bottom: 1px solid #575757;
    outline: 0;
    color: black;
    background: transparent;
    padding-bottom: 10px;
    margin: 16px 0;
  }
  
  & a {
    text-decoration: none;
    font-size: 16px;
    color: #575757;
    padding-bottom: 2px;
    
    &:hover {
      border-bottom: 1px solid black;
      color: black;
    }
  }
  
  padding: 16px 32px;
  
`;

export const StyledLogButton = styled.button`
  margin-top: 20px;
  background: #275efe;
  padding: 16px 32px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: white;
  border-radius: 24px;
  border: none;
  outline: none;
  overflow: hidden;
  cursor: pointer;
`;