import React from 'react';
import {useDispatch} from "react-redux";
import {signOut} from '../../redux/auth/auth.actions';
import {StyledExitButton, StyledHeader} from './StyledHeader';

const Header = () => {
  const dispatch = useDispatch();

  const logOut = () => dispatch(signOut());

  return (
    <StyledHeader>
      <StyledExitButton onClick={logOut}>Выйти</StyledExitButton>
    </StyledHeader>
  );
};

export default Header;
