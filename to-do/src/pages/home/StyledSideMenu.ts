import styled from "styled-components";

export const StyledMenu = styled.div`
  margin-top: 100px;
  width: 200px;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  
  & a {
    width: 100%;
    align-self: center;
    text-decoration: none;
    font-size: 18px;
    color: black;
    margin: 10px auto;
    
    &:hover {
      background: grey;
    }
  }
  
  & .active-link {
    color: white;
    background: black;
  }
`;
