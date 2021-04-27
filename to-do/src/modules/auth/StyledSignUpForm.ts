import styled from 'styled-components';

export const SignUpForm = styled.form`
  margin-top: 100px;
  margin-bottom: 20px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
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
`;
